const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve('test/tests/input.html'), 'utf8');
const parse = require('../../index.js');

module.exports = {
  name : 'input',
  this : function () {
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'input',
      attributes : {
        type : 'text'
      },
      childNodes : []
    }];
  }
};