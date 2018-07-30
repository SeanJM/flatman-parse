const parse = require("../../src/index.js");

module.exports = {
  name : "comment (multiline)",
  this : function () {
    const value = parse(`
<!--
This is a comment has
many lines.

It is a liner. With good stuff.
<div></div>
-->
    `);
    return value;
  },
  isDeepEqual : function () {
    return [{
      tagName    : "comment",
      children : [
        "",
        "This is a comment has",
        "many lines.",
        "",
        "It is a liner. With good stuff.",
        "<div></div>",
        ""
      ]
    }];
  }
};