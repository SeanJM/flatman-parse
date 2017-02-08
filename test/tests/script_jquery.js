const parse = require('../../index.js');
const fs = require('fs');
const path = require('path');
const script = fs.readFileSync(path.resolve('test/jquery-3.1.1.min.js'), 'utf8');

module.exports = {
  name : 'script (jquery)',
  this : function () {
    const str = `<script>${script}</script>`;
    return parse(str)[0].childNodes[0];
  },
  isEqual : function () {
    return script;
  }
};