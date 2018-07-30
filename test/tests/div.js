const parse = require("../../src/index.js");

module.exports = {
  name : "div",
  this : function () {
    const p = parse(`
<div></div>
    `);
    return p;
  },
  isDeepEqual : function () {
    return [{
      tagName : "div",
      attributes : {},
      children : []
    }];
  }
};