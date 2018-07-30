const parse = require("../../src/index.js");

module.exports = {
  name : "Comment",
  this : function () {
    return parse(`
<!--This is a comment-->
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName    : "comment",
      children : [ "This is a comment" ]
    }];
  }
};