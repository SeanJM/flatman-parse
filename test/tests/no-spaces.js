const parse = require('../../flatman-parse.js');
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.resolve('test/svg-inline.svg'), 'utf8');

// <svg><style></style><symbol></symbol></svg>

module.exports = {
  name : 'No spaces',
  this : function () {
    let res = parse(svg);
    return res;
  },
  isDeepEqual : function () {
    return [{
      tagName : 'svg',
      attributes : {},
      childNodes : [{
        tagName : 'style',
        attributes : {},
        childNodes : []
      }, {
        tagName : 'symbol',
        attributes : {},
        childNodes : []
      }]
    }];
  }
};