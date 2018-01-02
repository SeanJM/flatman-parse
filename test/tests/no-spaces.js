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
      childNodes : [{
        tagName : "style",
        attributes : {},
        childNodes : []
      }, {
        tagName : "symbol",
        attributes : {},
        childNodes : []
      }]
    }];
  }
};