const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve('test/tests/input_nested_with_sibling.html'), 'utf8');
const parse = require('../../index.js');

module.exports = {
  name : 'nested input with sibling',
  this : function () {
    return parse(str);
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
        childNodes : []
      }]
    }];
  }
};