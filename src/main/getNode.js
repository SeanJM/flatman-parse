const { SPACE, QUOTE }     = require("../constants/");
const filterAttributeName  = require("./filterAttributeName");
const filterAttributeValue = require("./filterAttributeValue");

function isComponent(tagName) {
  return (
    tagName[0] &&
    tagName[1] &&
    tagName[0].toUpperCase() === tagName[0] &&
    tagName[1].toLowerCase() === tagName[1]
  );
}

module.exports = function getNode(str) {
  var stringChar;

  var i = 0;
  var n = str.length;

  var node = {
    tagName : "",
    attributes : {},
    children : []
  };

  var attr = {
    name : "",
    value : ""
  };

  while (!SPACE[str[i]] && str[i]) {
    node.tagName += str[i];
    i += 1;
  }

  if (!isComponent(node.tagName)) {
    node.tagName = node.tagName.toLowerCase();
  }

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