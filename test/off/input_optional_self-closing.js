const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'input (optional slash)',
  this : function () {
    return parse(
`
<div>
  <input type="text" />
</div>
`
    );
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