const parse = require("../../src/index.js");

module.exports = {
  name : "style attribute",
  this : function () {
    return parse(`
<div style="display: block; float: left; margin-left: -1px"></div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : "div",
      attributes : {
        style : {
          display : "block",
          float : "left",
          marginLeft : "-1px"
        }
      },
      childNodes : []
    }];
  }
};