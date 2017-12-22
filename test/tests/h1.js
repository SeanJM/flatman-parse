const parse = require("../../src/index.js");

module.exports = {
  name : "h1",
  this : function () {
    const str = `
<h1>Title</h1>
`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName    : "h1",
      attributes : {},
      childNodes : [ "Title" ]
    }];
  }
};