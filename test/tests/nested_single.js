const parse = require('../../index.js');

module.exports = {
  name : 'div > div',
  this : function () {
    return parse(`
<div class="parent">
  <div class="parent-1"></div>
</div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'parent'
      },
      childNodes : [{
        tagName : 'div',
        attributes : {
          className : 'parent-1'
        },
        childNodes : []
      }]
    }];
  }
};