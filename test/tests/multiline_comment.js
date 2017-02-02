const parse = require('../../index.js');

module.exports = {
  name : 'Comment multiline',
  this : function () {
    return parse(`
<!--
This is a comment has
many lines.

It is a liner. With good stuff.
<div></div>
-->
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'comment',
      value : `
This is a comment has
many lines.

It is a liner. With good stuff.
<div></div>
`
    }];
  }
};