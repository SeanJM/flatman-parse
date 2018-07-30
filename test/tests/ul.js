const parse = require("../../src/index.js");

module.exports = {
  name : "ul",
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
      tagName : "ul",
      attributes : {},
      children : [{
        tagName : "li",
        attributes : {},
        children : ["Here is some text"]
      }]
    }];
  }
};