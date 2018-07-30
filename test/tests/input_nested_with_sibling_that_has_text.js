const parse = require("../../src/index.js");

module.exports = {
  name : "div > input + [string]",
  this : function () {
    return parse(`
<div>
  <input type="text">
  <div>Some text</div>
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
      }, {
        tagName : "div",
        attributes : {},
        children : ["Some text"]
      }]
    }];
  }
};