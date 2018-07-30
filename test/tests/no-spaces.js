const parse = require("../../src/index.js");
const svg   = `<svg><style></style><symbol></symbol></svg>`;

module.exports = {
  name : "No spaces",
  this : function () {
    let res = parse(svg);
    return res;
  },
  isDeepEqual : function () {
    return [{
      tagName : "svg",
      attributes : {},
      children : [{
        tagName : "style",
        attributes : {},
        children : []
      }, {
        tagName : "symbol",
        attributes : {},
        children : []
      }]
    }];
  }
};