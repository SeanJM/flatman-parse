const parse = require('../../index.js');

module.exports = {
  name : '2 Nodes',
  this : function () {
    return parse(`
<div class="test"></div>
<div class="test2"></div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'test'
      },
      childNodes : []
    }, {
      tagName : 'div',
      attributes : {
        className : 'test2'
      },
      childNodes : []
    }];
  }
};