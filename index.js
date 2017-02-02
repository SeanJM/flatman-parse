(function () {
var SELF_CLOSING = {
  img : true,
  input : true,
  hr : true,
  br : true
};
function isClosedTag(props) {
  const s = props.string.substring(props.index, props.index + 2);
  return s === '</' || s === '/>';
}
function isComment(props) {
  return props.string.substring(props.index, props.index + 4) === '<!--';
}
function isDocType(props) {
  const s = props.string
    .substring(props.index, props.index + 9)
    .toLowerCase();
  return s === '<!doctype';
}
function isOpenAndClosed(props) {
  const s = props.string
    .substring(props.index + 1, props.index + 6)
    .toLowerCase();
  return SELF_CLOSING[s];
}
function isOpenTag(props) {
  return (
    props.string[props.index] === '<' &&
    props.string[props.index + 1] !== '/' &&
    props.string.substring(props.index, props.index + 2) !== '<!'
  );
}
function isSelfClosingTag(tagName) {
  return SELF_CLOSING[tagName];
}
function isSpace(str) {
  return str === ' ' || str === '\t' || str === '\n';
}
function isText(props) {
  return props.string[props.index] !== '<';
}
function captureComment(props) {
  var innerComment = '';

  props.index += 4;

  while (props.string.substring(props.index, props.index + 3) !== '-->' && props.string[props.index]) {
    innerComment += props.string[props.index];
    props.index += 1;
  }

  props.index += 3;

  props.nodes.push({
    tagName : 'comment',
    value : innerComment
  });

  resetCapture(props);
}
function captureDocType(props) {
  let inner = '';
  let identifiers = [];
  let identifiersString;
  let rootAndType;
  let strChar;

  props.index += 2;

  while (props.string.substring(props.index, props.index + 3) !== '>' && props.string[props.index]) {
    inner += props.string[props.index];
    props.index += 1;

    if ((
      props.string[props.index] === '"'
      || props.string[props.index] === '\''
    ) && !strChar) {
      strChar = props.string[props.index];
      identifiersString = '';
      while (props.string[props.index + 1] !== strChar && props.string[props.index]) {
        props.index += 1;
        identifiersString += props.string[props.index];
      }
      props.index += 1;
      strChar = undefined;
      identifiers.push(identifiersString);
    }
  }

  props.index += 1;
  rootAndType = inner.split(' ');

  props.nodes.push({
    tagName : 'doctype',
    rootElement : rootAndType[1],
    type : rootAndType[2] && rootAndType[2].trim().toLowerCase(),
    publicIdentifier : identifiers[0],
    privateIdentifier : identifiers[1]
  });

  resetCapture(props);
}
function captureNode(props) {
  var capture = true;
  var innerTag = '';
  var node;

  // Get inner tag
  props.open += 1;
  props.index += 1;

  while (props.string[props.index] !== '>' && props.string[props.index]) {
    innerTag += props.string[props.index];
    props.index += 1;
  }

  props.index += 1;

  if (innerTag[innerTag.length - 1] === '/') {
    node = getNode(innerTag.substring(0, innerTag.length - 1));
    capture = false;
    props.nodes.push(node);
    resetCapture(props);
  } else {
    node = getNode(innerTag);
  }

  innerTag = '';

  if (isSelfClosingTag(node.tagName)) {
    capture = false;
    props.nodes.push(node);
    resetCapture(props);
  }

  while (props.index < props.length && capture) {
    if (isOpenAndClosed(props)) {
      props.open += 1;
      props.closed += 1;
    } else if (isOpenTag(props)) {
      props.open += 1;
    } if (isClosedTag(props)) {
      props.closed += 1;
    }

    if (props.open - props.closed === 0) {
      node.childNodes = parse(props.content);
      props.nodes.push(node);

      // Go to the end of the closed tag
      while (props.string[props.index] !== '>' && props.string[props.index]) {
        props.index += 1;
      }

      resetCapture(props);
      capture = false;
    }

    if (props.open > props.closed) {
      props.content += props.string[props.index];
    }

    props.index += 1;
  }
}
function captureText(props) {
  var temp;

  while (props.string[props.index] !== '<' && props.index < props.length) {
    props.index += 1;
  }

  props.index -= 1;

  temp = props.string.substring(
    props.anchor,
    props.index + 1
  );

  if (temp.trim()) {
    props.nodes.push(temp);
  }

  resetCapture(props);
}
function filterAttributeName(name) {
  return name === 'class'
    ? 'className'
    : name;
}
function getNode(str) {
  var getAttrName = false;
  var getAttrValue = false;
  var stringChar;

  var i = 0;
  var n = str.length;

  var node = {
    tagName : '',
    attributes : {},
    childNodes : []
  };

  var attr = {
    name : '',
    value : ''
  };

  while (!isSpace(str[i]) && str[i]) {
    node.tagName += str[i];
    i++;
  }

  node.tagName === node.tagName.toLowerCase();

  for (; i < n; i++) {
    if (isSpace(str[i])) {
      getAttrName = true;
      i++;
    }

    if (str[i] === '=') {
      getAttrName = false;
      getAttrValue = true;
      stringChar = str[i + 1];
      i++;
    } else if (getAttrValue && str[i] === stringChar) {
      getAttrValue = false;
      node.attributes[filterAttributeName(attr.name)] = attr.value;
      attr.name = '';
      attr.value = '';
    } else if (getAttrName) {
      attr.name = attr.name += str[i];
    } else if (getAttrValue) {
      attr.value = attr.value += str[i];
    }
  }

  return node;
}
function parse(string) {
  var props = {
    content : '',
    string : string,
    index : 0,
    anchor : 0,
    open : 0,
    closed : 0,
    length : string.length,
    nodes : []
  };


  for (; props.index < props.length; props.index++) {
    if (!isSpace(props.string[props.index])) {
      if (isOpenTag(props)) {
        captureNode(props);
      } else if (isText(props)) {
        captureText(props);
      } else if (isComment(props)) {
        captureComment(props);
      } else if (isDocType(props)) {
        captureDocType(props);
      }
    }
  }

  return props.nodes;
}
function resetCapture(props) {
  props.open = 0;
  props.closed = 0;
  props.anchor = props.index;
  props.content = '';
}
if (typeof module === 'object') {
  module.exports = parse;
} else if (flatman) {
  flatman.parse = parse;
}
}());