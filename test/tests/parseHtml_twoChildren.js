const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve('test/tests/parseHtml_twoChildren.html'), 'utf8');
const parse = require('../../index.js');

module.exports = {
  name : '2 Nodes',
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
    }, {
      tagName : 'div',
      attributes : {
        className : 'test2'
      },
      childNodes : []
    }];
  }
};