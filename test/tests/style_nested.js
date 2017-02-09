const parse = require('../../index.js');
const path = require('path');
const fs = require('fs');
const style = fs.readFileSync(path.resolve('test/bootstrap.min.css'), 'utf8');

module.exports = {
  name : 'style (bootstrap)',
  this : function () {
    const str = `<div><style>${style}</style></div>`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {},
      childNodes : [{
        tagName : 'style',
        attributes : {},
        childNodes : [style]
      }]
    }];
  }
};