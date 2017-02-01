const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve('test/tests/parseHtmlSimple.html'), 'utf8');
const parse = require('../../index.js');

module.exports = {
  name : 'Simple',
  this : function () {
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'test'
      },
      childNodes : []
    }];
  }
};