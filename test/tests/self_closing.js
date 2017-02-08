const parse = require('../../index.js');

module.exports = {
  name : '<input/>',
  this : function () {
    return parse(`
<input/>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'input',
      attributes : {},
      childNodes : []
    }];
  }
};