const parse = require('../../index.js');

const script = (`
  var s = 888;
  if (s < 5) {
    someFunction();
  } else if (s <= 4) {
    someOtherFunction();
  }
  let string = 'this is a string <ithastemplate>';
  let string = "<script></script>";
`);

module.exports = {
  name : 'script',
  this : function () {
    const str = `<script>${script}</script>`;
    return parse(str)[0].childNodes[0];
  },
  isEqual : function () {
    return script;
  }
};