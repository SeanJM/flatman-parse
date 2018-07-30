const fs = require("fs");
const path = require("path");
const parse = require("../../src/index.js");

const scripts = [
  fs.readFileSync(path.resolve("test/test.js"), "utf8"),
  fs.readFileSync(path.resolve("test/jquery-3.1.1.min.js"), "utf8")
];

const script = scripts[1];

module.exports = {
  name : "script",
  this : function () {
    const str = `<script>${script}</script>`;
    return parse(str)[0].children[0];
  },
  isEqual : function () {
    return script;
  }
};
