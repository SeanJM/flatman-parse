const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'div.test > [string] + div.sibling',
  this : function () {
    const str = `
<div class="test">   a text string<div class="sibling"></div></div>
`;
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