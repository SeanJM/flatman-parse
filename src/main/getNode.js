const { SPACE, QUOTE }     = require("../constants/");
const filterAttributeName  = require("./filterAttributeName");
const filterAttributeValue = require("./filterAttributeValue");

module.exports = function getNode(str) {
  var stringChar;

  var i = 0;
  var n = str.length;

  var node = {
    tagName : "",
    attributes : {},
    childNodes : []
  };

  var attr = {
    name : "",
    value : ""
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

    while (str[i] !== "=" && str[i]) {
      attr.name += str[i];
      i += 1;
    }

    if (str[i] === "=") {
      while (!QUOTE[str[i]] && str[i]) {
        i += 1;
      }

      stringChar = str[i];
      i += 1;

      while (str[i] !== stringChar && str[i]) {
        attr.value += str[i];
        i += 1;
      }

      i += 1;

      node.attributes[filterAttributeName(attr.name)] = (
        filterAttributeValue(attr.name, attr.value)
      );

      attr.name = "";
      attr.value = "";
    }
  }

  return node;
};