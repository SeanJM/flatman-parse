const parse = require("../../src/index.js");

module.exports = {
  name : "div > input",
  this : function () {
    return parse(`
<div>
  <input type="text">
</div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : "div",
      attributes : {},
      children : [{
        tagName : "input",
        attributes : {
          type : "text"
        },
        children : []
      }]
    }];
  }
};