const parse = require('../../index.js');
const fs = require('fs');
const path = require('path');
const script = fs.readFileSync(path.resolve('test/jquery-3.1.1.min.js'), 'utf8').slice(0, 1000);

module.exports = {
  name : 'nested script (jquery)',
  this : function () {
    const str = `<div><script>${script}</script></div>`;
    console.log(parse(str));
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {},
      childNodes : [{
      tagName : 'script',
        attributes : {},
        childNodes : [script]
      }]
    }];
  }
};