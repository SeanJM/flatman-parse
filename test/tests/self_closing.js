const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve('test/tests/self_closing.html'), 'utf8');
const parse = require('../../index.js');

module.exports = {
  name : 'Self closing',
  this : function () {
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {},
      childNodes : []
    }];
  }
};