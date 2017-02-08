const parse = require('../../index.js');

module.exports = {
  name : 'div.test',
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