const parse = require("../../src/index.js");

module.exports = {
  name : "div.test > [string] + div.sibling",
  this : function () {
    const str = `
<div class="test">   a text string<div class="sibling"></div></div>
`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : "div",
      attributes : {
        className : "test"
      },
      children : [
        "   a text string",
        {
          tagName : "div",
          attributes : {
            className : "sibling"
          },
          children : []
        }]
    }];
  }
};