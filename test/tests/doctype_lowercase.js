const parse = require("../../src/index.js");

module.exports = {
  name : "Doc type",
  this : function () {
    return parse("<!doctype html>");
  },
  isDeepEqual : function () {
    return [{
      tagName           : "doctype",
      rootElement       : "html",
      type              : undefined,
      publicIdentifier  : undefined,
      privateIdentifier : undefined,
    }];
  }
};