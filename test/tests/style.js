const parse = require('../../index.js');

const style = `
  .class {
    content : '<style></style>';
    font-size : 13px;
  }

  .class-2 > div {
    content : '<style></style>';
    font-size : 13px;
  }
`;

module.exports = {
  name : 'style',
  this : function () {
    const str = `<style>${style}</style>`;
    return parse(str)[0].childNodes[0];
  },
  isEqual : function () {
    return style;
  }
};