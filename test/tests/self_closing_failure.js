const parse = require("../../src/index.js");

module.exports = {
  name : "<div/>",
  this : function () {
    return parse("<div/>");
  },
  isDeepEqual : function () {
    return [{
      tagName    : "div",
      attributes : {},
      children : []
    }];
  }
};