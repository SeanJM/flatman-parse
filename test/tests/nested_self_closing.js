const parse = require('../../index.js');

module.exports = {
  name : 'Nested self closing',
  this : function () {
    return parse(`
<div>
  <div/>
</div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {},
      childNodes : [{
        tagName : 'div',
        attributes : {},
        childNodes : []
      }]
    }];
  }
};