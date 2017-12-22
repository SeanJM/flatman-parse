const parse = require("../../src/index.js");

module.exports = {
  name : "attributes (multiline)",
  this : function () {
    const str = `
<span
  class="span-class"
  id="multi"
  data-test="test"
></span>
`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : "span",
      attributes : {
        className : "span-class",
        id : "multi",
        "data-test" : "test"
      },
      childNodes : []
    }];
  }
};