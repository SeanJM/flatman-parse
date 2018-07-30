const parse = require("../../src/index.js");
const fs = require("fs");
const path = require("path");

const svg = fs.readFileSync(path.resolve("test/svg-g.svg"), "utf8");

module.exports = {
  name : "svg (g tag)",
  this : function () {
    return parse(svg);
  },
  isDeepEqual : function () {
    return [{
      tagName : "g",
      attributes : {
        className : "cls-4"
      },
      children : [{
        tagName : "path",
        attributes : {
          d : "M16.5,20.4a.49.49,0,0,1-.48.38.45.45,0,0,1-.48-.38l-1-9.1A1.47,1.47,0,0,1,16,9.67h0a1.47,1.47,0,0,1,1.47,1.63Z"
        },
        children : []
      }, {
        tagName : "circle",
        attributes : {
          cx : "16.02",
          cy : "23.71",
          r : "1.48"
        },
        children : []
      }]
    }];
  }
};