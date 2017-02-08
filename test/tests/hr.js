const parse = require('../../index.js');

module.exports = {
  name : 'hr',
  this : function () {
    const str = `
<div><hr></div>
`;
    return parse(str);
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