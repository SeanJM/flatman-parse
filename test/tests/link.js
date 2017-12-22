const parse = require("../../src/index.js");

module.exports = {
  name : "link",
  this : function () {
    return parse(`
<link rel="stylesheet" href="/lib/w3.css">
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : "link",
      attributes : {
        rel : "stylesheet",
        href : "/lib/w3.css"
      },
      childNodes : []
    }];
  }
};