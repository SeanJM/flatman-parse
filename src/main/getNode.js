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