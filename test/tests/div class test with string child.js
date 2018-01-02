const parse = require("../../src/index.js");

module.exports = {
  name : "div.test > [string]",
  this : function () {
    const p = parse(`
<div class="test">   a text string</div>
    `);
    console.log(p);
    return p;
  },
  isDeepEqual : function () {
    return [{
      tagName : "div",
      attributes : {
        className : "test"
      },
      childNodes : ["   a text string"]
    }];
  }
};