const parse = require('../../index.js');

module.exports = {
  name : 'input nested div',
  this : function () {
    return parse(`
<div>
  <input type="text">
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
      }]
    }];
  }
};