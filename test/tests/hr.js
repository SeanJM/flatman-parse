const parse = require("../../src/index.js");

module.exports = {
  name : "hr",
  this : function () {
    const str = `
<div><hr></div>
`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : "div",
      attributes : {},
      children : [{
        tagName : "hr",
        attributes : {},
        children : []
      }]
    }];
  }
};