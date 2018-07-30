const parse = require("../../src/index.js");
const fs = require("fs");
const path = require("path");

const style = fs.readFileSync(path.resolve("test/bootstrap.min.css"), "utf8");

module.exports = {
  name : "style (bootstrap)",
  this : function () {
    const str = `<style>${style}</style>`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : "style",
      attributes : {},
      children : [style]
    }];
  }
};