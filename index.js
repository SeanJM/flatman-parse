(function () {
const SPACE = {
  ' ' : true,
  '\t' : true,
  '\n' : true
};

const SELF_CLOSING = {
  br : true,
  hr : true,

  col : true,
  img : true,
  wbr : true,

  area : true,
  base : true,
  link : true,
  meta : true,

  embed : true,
  input : true,
  param : true,
  param : true,
  track : true,

  keygen : true,
  source : true,

  command : true,
};
function isClosedTag(p) {
  const i = p.i;
  const s = p.str.substring(i, i + 2);
  return s === '</';
}
function isComment(p) {
  const i = p.i;
  const s = p.str.substring(i, i + 4);
  return s === '<!--';
}
function isDocType(p) {
  const i = p.i;
  const s = p.str
    .substring(i, i + 9)
    .toLowerCase();
  return s === '<!doctype';
}
function isOpenTag(p) {
  const i = p.i;
  return (
    p.str[i] === '<' &&
    p.str[i + 1] !== '/' &&
    p.str.substring(i, i + 2) !== '<!'
  );
}
function isSelfClosingTag(p) {
  const i = p.i;
  const str = p.str
    .substring(i + 1, i + 8)
    .toLowerCase();

  return (
        SELF_CLOSING[
        str.substring(0, 2) ]
    ||  SELF_CLOSING[
        str.substring(0, 3) ]
    ||  SELF_CLOSING[
        str.substring(0, 4) ]
    ||  SELF_CLOSING[
        str.substring(0, 5) ]
    ||  SELF_CLOSING[
        str.substring(0, 6) ]
    ||  SELF_CLOSING[
        str ]
  );
}
function isText(p) {
  return p.str[p.i] !== '<';
}
function captureComment(p) {
  let value = '';

  p.i += 4;

  while (
    p.str.substring(p.i, p.i + 3) !== '-->'
    && p.str[p.i]
  ) {
    value += p.str[p.i];
    p.i += 1;
  }

  p.i += 3;

  p.nodes.push({
    tagName : 'comment',
    value : value
  });

  resetCapture(p);
}
function captureDocType(p) {
  let inner = '';
  let identifiers = [];
  let identifiersString;
  let rootAndType;
  let strChar;

  p.i += 2;

  while (
    p.str.substring(p.i, p.i + 1) !== '>'
    && p.str[p.i]
  ) {
    inner += p.str[p.i];
    p.i += 1;

    if ((
      p.str[p.i] === '"'
      || p.str[p.i] === '\''
    ) && !strChar) {
      strChar = p.str[p.i];
      identifiersString = '';
      while (p.str[p.i + 1] !== strChar && p.str[p.i]) {
        p.i += 1;
        identifiersString += p.str[p.i];
      }
      p.i += 1;
      strChar = undefined;
      identifiers.push(identifiersString);
    }
  }

  p.i += 1;
  rootAndType = inner.split(' ');

  p.nodes.push({
    tagName : 'doctype',
    rootElement : rootAndType[1],
    type : rootAndType[2] && rootAndType[2].trim().toLowerCase(),
    publicIdentifier : identifiers[0],
    privateIdentifier : identifiers[1]
  });

  resetCapture(p);
}
function captureNode(p) {
  let hasSlash = false;
  let capture = true;
  let innerTag = '';
  let node;

  // Get inner tag
  p.open += 1;
  p.i += 1;

  while (p.str[p.i] !== '>' && p.str[p.i]) {
    innerTag += p.str[p.i];
    p.i += 1;
  }

  if (innerTag[innerTag.length - 1] === '/') {
    innerTag = innerTag.substring(0, innerTag.length - 1);
    hasSlash = true;
  }

  p.i += 1;
  node = getNode(innerTag);
  innerTag = '';
  if (hasSlash && SELF_CLOSING[node.tagName] || SELF_CLOSING[node.tagName]) {
    capture = false;
    p.nodes.push(node);
    resetCapture(p);
  } else if (hasSlash) {
    throw new Error('Tag: \'' + node.tagName + '\' is not a self closing tag.');
  }

  while (p.i < p.length && capture) {
    if (isSelfClosingTag(p)) {
      p.open += 1;
      p.closed += 1;
    } else if (isOpenTag(p)) {
      p.open += 1;
    } if (isClosedTag(p)) {
      p.closed += 1;
    }

    if (p.open - p.closed === 0) {
      node.childNodes = parse(p.content);
      p.nodes.push(node);

      // Go to the end of the closed tag
      while (p.str[p.i] !== '>' && p.str[p.i]) {
        p.i += 1;
      }

      resetCapture(p);
      capture = false;
    }

    if (p.open > p.closed) {
      p.content += p.str[p.i];
    }

    p.i += 1;
  }
}
function captureText(p) {
  let temp;

  while (p.str[p.i] !== '<' && p.i < p.length) {
    p.i += 1;
  }

  p.i -= 1;

  temp = p.str.substring(
    p.anchor,
    p.i + 1
  );

  if (temp[0] === '\n') {
    temp = temp.substring(1, temp.length);
  }

  if (temp.trim()) {
    p.nodes.push(temp.trimRight());
  }

  resetCapture(p);
}
function filterAttributeName(name) {
  return name === 'class'
    ? 'className'
    : name;
}
function getNode(str) {
  let stringChar;

  let i = 0;
  let n = str.length;

  let node = {
    tagName : '',
    attributes : {},
    childNodes : []
  };

  let attr = {
    name : '',
    value : ''
  };

  while (!SPACE[str[i]] && str[i]) {
    node.tagName += str[i];
    i += 1;
  }

  node.tagName = node.tagName.toLowerCase();

  for (; i < n; i++) {
    while (SPACE[str[i]] && str[i]) {
      i += 1;
    }

    while (str[i] !== '=' && str[i]) {
      attr.name += str[i];
      i += 1;
    }

    if (str[i] === '=') {
      while (
        (str[i] !== '\'' && str[i] !== '\"')
        && str[i]
      ) {
        i += 1;
      }

      stringChar = str[i];
      i += 1;

      while (str[i] !== stringChar && str[i]) {
        attr.value += str[i];
        i += 1;
      }

      i += 1;
      node.attributes[filterAttributeName(attr.name)] = attr.value;
      attr.name = '';
      attr.value = '';
    }
  }

  return node;
}
function parse(str) {
  let p = {
    content : '',
    str : str,
    i : 0,
    anchor : 0,
    open : 0,
    closed : 0,
    length : str.length,
    nodes : []
  };

  for (; p.i < p.length; p.i++) {
    if (!SPACE[p.str[p.i]]) {
      if (isOpenTag(p)) {
        captureNode(p);
      } else if (isText(p)) {
        captureText(p);
      } else if (isComment(p)) {
        captureComment(p);
      } else if (isDocType(p)) {
        captureDocType(p);
      }
    }
  }

  return p.nodes;
}
function resetCapture(p) {
  p.open = 0;
  p.closed = 0;
  p.anchor = p.i;
  p.content = '';
}
if (typeof module === 'object') {
  module.exports = parse;
} else if (flatman) {
  flatman.parse = parse;
}
}());