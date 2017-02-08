const parse = require('../../index.js');

module.exports = {
  name : 'div > input + div',
  this : function () {
    return parse(`
<div>
  <input type="text">
  <div></div>
</div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {},
      childNodes : [{
        tagName : 'input',
        attributes : {
          type : 'text'
        },
        childNodes : []
      }, {
        tagName : 'div',
        attributes : {},
        childNodes : []
      }]
    }];
  }
};