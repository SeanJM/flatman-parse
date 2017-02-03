const parse = require('../../index.js');

module.exports = {
  name : 'Self closing',
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