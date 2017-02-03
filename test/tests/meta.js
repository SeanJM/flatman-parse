const parse = require('../../index.js');

module.exports = {
  name : 'link',
  this : function () {
    return parse(`
<meta name="viewport" content="width=device-width, initial-scale=1">
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'meta',
      attributes : {
        name : 'viewport',
        content : 'width=device-width, initial-scale=1'
      },
      childNodes : []
    }];
  }
};