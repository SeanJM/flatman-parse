const parse = require("../../src/index.js");

module.exports = {
  name : "String with element sibling",
  this : function () {
    const str = `a<b>b</b>c`;
    const p   = parse(str);
    return p;
  },
  isDeepEqual : function () {
    return [
      "a",
      {
        tagName    : "b",
        attributes : {},
        childNodes : [ "b" ],
      },
      "c"
    ];
  }
};