const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'input',
  this : function () {
    return parse(`
<input type="text">
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'input',
      attributes : {
        type : 'text'
      },
      childNodes : []
    }];
  }
};