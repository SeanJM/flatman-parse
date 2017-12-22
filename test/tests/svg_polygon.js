const parse = require("../../src/index.js");
const fs = require("fs");
const path = require("path");

const svg = fs.readFileSync(path.resolve("test/svg-polygon.svg"), "utf8");

module.exports = {
  name : "svg (polygon)",
  this : function () {
    return parse(svg);
  },
  isDeepEqual : function () {
    return [{
      tagName : "svg",
      attributes : {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink" : "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 48 48",
        style: {
          enableBackground: "new 0 0 48 48"
        },
        "xml:space": "preserve"
      },
      childNodes : [{
        tagName : "polygon",
        attributes : {
          points: "29.4,24 42,11.4 42,11.4 36.6,6 36.6,6 24,18.6 11.4,6 6,11.4 6,11.4 18.6,24 6,36.6 11.4,42 24,29.4 36.6,42\n  36.6,42 42,36.6 "
        },
        childNodes : []
      }]
    }];
  }
};