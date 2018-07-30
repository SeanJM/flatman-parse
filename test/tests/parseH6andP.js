const parse = require("../../src/index.js");

module.exports = {
  name : "h6 + p",
  this : function () {
    return parse(`
<h6>Already have insurance?</h6>
<p>That's okay, we can make the switch for you</p>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : "h6",
      attributes : {},
      children : ["Already have insurance?"]
    }, {
      tagName : "p",
      attributes : {},
      children : ["That's okay, we can make the switch for you"]
    }];
  }
};