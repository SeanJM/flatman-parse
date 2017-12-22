const fs = require("fs");
const path = require("path");
const parse = require("../../src/index.js");

module.exports = {
  name : "DocType parse",
  this : function () {
    const str = fs.readFileSync(
      path.resolve("test/assets/doctype-parse.html"),
      "utf8"
    );

    return parse(str)[0];
  },
  isDeepEqual : function () {
    return {
      tagName: "doctype",
      rootElement: "HTML",
      type: undefined,
      publicIdentifier: undefined,
      privateIdentifier: undefined
    };
  }
};