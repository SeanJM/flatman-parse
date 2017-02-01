const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve('test/tests/parseHtmlSimpleWithTextAndNode.html'), 'utf8');
const parse = require('../../index.js');

module.exports = {
  name : 'With one text node and a div sibling',
  this : function () {
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'test'
      },
      childNodes : [
        '   a text string',
        {
          tagName : 'div',
          attributes : {
            className : 'sibling'
          },
          childNodes : []
        }]
    }];
  }
};