const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'div > input + [string]',
  this : function () {
    return parse(`
<div>
  <input type="text">
  <div>Some text</div>
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
        childNodes : ['Some text']
      }]
    }];
  }
};