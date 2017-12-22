const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'comment (multiline)',
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