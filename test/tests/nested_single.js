const parse = require("../../src/index.js");

module.exports = {
  name : "div > div",
  this : function () {
    return parse(`
<div class="parent">
  <div class="parent-1"></div>
</div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : "div",
      attributes : {
        className : "parent"
      },
      children : [{
        tagName : "div",
        attributes : {
          className : "parent-1"
        },
        children : []
      }]
    }];
  }
};