const parse = require("../../src/index.js");

module.exports = {
  name : "Heading (strong)",
  this : function () {
    const str = `a<b>b</b>c`;
    const p   = parse(str);
    console.log(p);
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