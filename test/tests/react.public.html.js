const parse = require("../../src/index.js");
const fs    = require("fs");
const path  = require("path");
const str   = fs.readFileSync(path.resolve(__dirname, "../assets/react.public.html"), "utf8");

module.exports = {
  name : "React public HTML",
  this : function () {
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : "ul",
      attributes : {},
      childNodes : [{
        tagName : "li",
        attributes : {},
        childNodes : ["Here is some text"]
      }]
    }];
  }
};