const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'ul',
  this : function () {
    const str = `
<ul>
  <li>Here is some text</li>
</ul>
`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'ul',
      attributes : {},
      childNodes : [{
        tagName : 'li',
        attributes : {},
        childNodes : ["Here is some text"]
      }]
    }];
  }
};