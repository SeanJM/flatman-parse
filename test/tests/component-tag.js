const parse = require("../../src/index.js");

module.exports = {
  name: "Component tagName",
  this: function () {
    let s = parse("<Component/><Component name=\"test\"></Component>");
    return s;
  },
  isDeepEqual: function () {
    return [{
      tagName    : "Component",
      attributes : {},
      childNodes : []
    }, {
      tagName    : "Component",
      attributes : {
        name : "test"
      },
      childNodes : []
    }];
  }
};