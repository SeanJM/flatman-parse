(function () {
var SELF_CLOSING = [
  'img',
  'input',
  'hr',
  'br'
];
function isClosedTag(str, i) {
  return (
    str[i] === '<' &&
    str[i + 1] === '/'
  );
}
function isOpenAndClosed(str, i) {
  return (
    str.substring(i, i + 6) === '<input'
  );
}
function isOpenTag(str, i) {
  return (
    str[i] === '<' &&
    str[i + 1] !== '/' &&
    str.substring(i, i + 4) !== '<!--'
  );
}
function isSelfClosingTag(tagName) {
  return (
    tagName === 'input' ||
    tagName === 'hr' ||
    tagName === 'br'
  );
}
function isSpace(str) {
  return str === ' ' || str === '\t' || str === '\n';
}
function isText(str, i) {
  return str[i] !== '<';
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
      node.attributes[attr.name === 'class' ? 'className' : attr.name] = attr.value;
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
function parse(str) {
  var n = str.length;
  var i = 0;
  var nodes = [];
  var node;

  var anchor = 0;
  var open = 0;
  var closed = 0;

  var content = '';
  var innerTag = '';

  function reset() {
    open = 0;
    closed = 0;
    anchor = i;
    content = '';
  }

  function captureText() {
    var t;
    while (str[i] !== '<' && i < n) {
      i += 1;
    }
    i--;
    t = str.substring(anchor, i + 1);
    if (t.trim()) {
      nodes.push(str.substring(anchor, i + 1));
    }
    reset();
  }

  function captureTag() {
    var capture = true;

    // Get inner tag
    open += 1;
    i += 1;
    while (str[i] !== '>' && str[i]) {
      innerTag += str[i];
      i += 1;
    }
    i += 1;

    if (innerTag[i - 3] === '/') {
      node = getNode(innerTag.substring(0, innerTag.length - 1));
      capture = false;
      nodes.push(node);
      reset();
    } else {
      node = getNode(innerTag);
    }

    innerTag = '';

    if (isSelfClosingTag(node.tagName)) {
      capture = false;
      nodes.push(node);
      reset();
    }

    while (i < n && capture) {
      if (isOpenAndClosed(str, i)) {
        open += 1;
        closed += 1;
      } else if (isOpenTag(str, i)) {
        open += 1;
      } if (isClosedTag(str, i)) {
        closed += 1;
      }

      if (open - closed === 0) {
        node.childNodes = parse(content);
        nodes.push(node);

        // Go to the end of the closed tag
        while (str[i] !== '>' && str[i]) i++;

        reset();
        capture = false;
      }

      if (open > closed) {
        content += str[i];
      }

      i++;
    }
  }

  for (; i < n; i++) {
    if (!isSpace(str[i])) {
      if (isOpenTag(str, i)) {
        captureTag();
      } else if (isText(str, i)) {
        captureText();
      }
    }
  }
  return nodes;
}
if (typeof module === 'object') {
  module.exports = parse;
} else if (flatman) {
  flatman.parse = parse;
}
}());