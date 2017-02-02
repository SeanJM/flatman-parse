const parse = require('../../index.js');

module.exports = {
  name : 'Self closing',
  this : function () {
    return parse(`
<div/>
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