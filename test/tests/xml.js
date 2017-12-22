const parse = require("../../src/index.js");

module.exports = {
  name : "xml declaration",
  this : function () {
    return parse(`
<?xml version="1.0" encoding="utf-8"?>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : "xml",
      attributes : {
        version : "1.0",
        encoding : "utf-8"
      }
    }];
  }
};