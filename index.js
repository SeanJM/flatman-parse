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

  if (innerTag[props.index - 3] === '/') {
    node = getNode(innerTag.substring(0, innerTag.length - 1));
    capture = false;
    props.nodes.push(node);
    reset(props);
  } else {
    node = getNode(innerTag);
  }

  innerTag = '';

  if (isSelfClosingTag(node.tagName)) {
    capture = false;
    props.nodes.push(node);
    reset(props);
  }

  while (props.index < props.length && capture) {
    if (isOpenAndClosed(props.string, props.index)) {
      props.open += 1;
      props.closed += 1;
    } else if (isOpenTag(props.string, props.index)) {
      props.open += 1;
    } if (isClosedTag(props.string, props.index)) {
      props.closed += 1;
    }

    if (props.open - props.closed === 0) {
      node.childNodes = parse(props.content);
      props.nodes.push(node);

      // Go to the end of the closed tag
      while (props.string[props.index] !== '>' && props.string[props.index]) {
        props.index += 1;
      }

      reset(props);
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

  reset(props);
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
  var props = {
    content : '',
    string : str,
    index : 0,
    anchor : 0,
    open : 0,
    closed : 0,
    length : str.length,
    nodes : []
  };

  for (; props.index < props.length; props.index++) {
    if (!isSpace(props.string[props.index])) {
      if (isOpenTag(props.string, props.index)) {
        captureNode(props);
      } else if (isText(props.string, props.index)) {
        captureText(props);
      }
    }
  }

  return props.nodes;
}
function reset(props) {
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