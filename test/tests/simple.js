const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'div',
  this : function () {
    return parse(`
<div></div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {},
      childNodes : []
    }];
  }
};