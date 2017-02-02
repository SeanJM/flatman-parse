const parse = require('../../index.js');

module.exports = {
  name : 'With one text node',
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