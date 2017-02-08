const parse = require('../../index.js');

module.exports = {
  name : 'div.test > [string]',
  this : function () {
    return parse(`
<div class="test">   a text string</div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'test'
      },
      childNodes : ['   a text string']
    }];
  }
};