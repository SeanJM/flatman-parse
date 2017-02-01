const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve('test/tests/parseHtml_nested_single.html'), 'utf8');
const parse = require('../../index.js');

module.exports = {
  name : '1 node with 1 child',
  this : function () {
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'parent'
      },
      childNodes : [{
        tagName : 'div',
        attributes : {
          className : 'parent-1'
        },
        childNodes : []
      }]
    }];
  }
};