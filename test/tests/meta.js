const parse = require("../../src/index.js");

module.exports = {
  name : "meta",
  this : function () {
    return parse(`
<meta name="viewport" content="width=device-width, initial-scale=1">
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : "meta",
      attributes : {
        name : "viewport",
        content : "width=device-width, initial-scale=1"
      },
      children : []
    }];
  }
};