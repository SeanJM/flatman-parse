const parse = require('../../index.js');

module.exports = {
  name : 'With one text node and a div sibling',
  this : function () {
    return parse(`
<div class="test">   a text string<div class="sibling"></div></div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'test'
      },
      childNodes : [
        '   a text string',
        {
          tagName : 'div',
          attributes : {
            className : 'sibling'
          },
          childNodes : []
        }]
    }];
  }
};