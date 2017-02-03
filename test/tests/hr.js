const parse = require('../../index.js');

module.exports = {
  name : 'horizontal rule',
  this : function () {
    return parse(
`
<div><hr></div>
`
    );
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {},
      childNodes : [{
        tagName : 'hr',
        attributes : {},
        childNodes : []
      }]
    }];
  }
};