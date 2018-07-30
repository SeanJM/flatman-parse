const parse = require("../../src/index.js");

module.exports = {
  name : "div.test > [string]",
  this : function () {
    const p = parse(`
<div class="test">   a text string</div>
    `);
    return p;
  },
  isDeepEqual : function () {
    return [{
      tagName : "div",
      attributes : {
        className : "test"
      },
      children : ["   a text string"]
    }];
  }
};