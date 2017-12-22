const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'Comment',
  this : function () {
    return parse(`
<!--This is a comment-->
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'comment',
      value : 'This is a comment'
    }];
  }
};