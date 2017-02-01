const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve('test/tests/parseHtml_nested_simple.html'), 'utf8');
const parse = require('../../index.js');

module.exports = {
  name : '2 Children with 2 children',
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
      }, {
        tagName : 'div',
        attributes : {
          className : 'parent-2'
        },
        childNodes : []
      }]
    }, {
      tagName : 'div',
      attributes : {
        className : 'parent2'
      },
      childNodes : [{
        tagName : 'div',
        attributes : {
          className : 'parent2-1'
        },
        childNodes : []
      }, {
        tagName : 'div',
        attributes : {
          className : 'parent2-2'
        },
        childNodes : []
      }]
    }];
  }
};