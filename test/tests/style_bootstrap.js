const parse = require('../../index.js');
const path = require('path');
const fs = require('fs');
const style = fs.readFileSync(path.resolve('test/bootstrap.min.css'), 'utf8');

module.exports = {
  name : 'style (bootstrap)',
  this : function () {
    const str = `<style>${style}</style>`;
    return parse(str)[0].childNodes[0];
  },
  isEqual : function () {
    return style;
  }
};