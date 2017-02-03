const parse = require('../../index.js');

module.exports = {
  name : 'Multiline attributes',
  this : function () {
    const str = `
<span
  class="span-class"
  id="multi"
  data-test="test"
></span>
`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'span',
      attributes : {
        className : 'span-class',
        id : 'multi',
        'data-test' : 'test'
      },
      childNodes : []
    }];
  }
};