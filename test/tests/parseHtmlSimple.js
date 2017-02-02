const parse = require('../../index.js');

module.exports = {
  name : 'Simple',
  this : function () {
    return parse(`
<div class="test"></div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'test'
      },
      childNodes : []
    }];
  }
};