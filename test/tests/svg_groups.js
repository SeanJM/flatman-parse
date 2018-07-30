const parse = require("../../src/index.js");
const fs = require("fs");
const path = require("path");

const svg = fs.readFileSync(path.resolve("test/image.svg"), "utf8");

module.exports = {
  name : "svg (groups)",
  this : function () {
    return parse(svg);
  },
  isDeepEqual : function () {
    return [{
      tagName : "svg",
      attributes : {
        xmlns : "http://www.w3.org/2000/svg"
      },
      children : [{
        tagName : "defs",
        attributes : {},
        children : [{
          tagName : "style",
          attributes : {},
          children : [" .cls-1 { opacity: 0.1; } .cls-2 { opacity: 0.2; } .cls-3 { fill: #f0c178; } .cls-4 { opacity: 0.15; } .cls-5 { fill: #fff; } "]
        }, {
          tagName : "style",
          attributes : {},
          children : [" .cls-1 { opacity: 0.1; } .cls-2 { opacity: 0.2; } .cls-3 { fill: #f07a78; } .cls-4 { opacity: 0.15; } .cls-5 { fill: #fff; } "]
        }]
      }, {
        tagName : "symbol",
        attributes : {
          viewBox : "0 0 32 32",
          id : "icon-color_alert",
        },
        children : [{
          tagName : "title",
          attributes : {},
          children : ["icon-color"]
        }, {
          tagName : "path",
          attributes : {
            className : "cls-1",
            d : "M1.87,25.6l11.84-20a2.72,2.72,0,0,1,4.68,0l11.84,20a2.72,2.72,0,0,1-2.34,4.11H4.21A2.72,2.72,0,0,1,1.87,25.6Z"
          },
          children : []
        }, {
          tagName : "path",
          attributes : {
            className : "cls-2",
            d : "M2.15,24.86,13.76,5.18a2.66,2.66,0,0,1,4.59,0L30,24.86a2.68,2.68,0,0,1-2.29,4H4.45A2.68,2.68,0,0,1,2.15,24.86Z"
          },
          children : []
        }, {
          tagName : "path",
          attributes : {
            className : "cls-3",
            d : "M2.33,24.29,13.74,5a2.62,2.62,0,0,1,4.51,0L29.67,24.29a2.62,2.62,0,0,1-2.26,4H4.59A2.62,2.62,0,0,1,2.33,24.29Z"
          },
          children : []
        }, {
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
        }, {
          tagName : "g",
          attributes : {},
          children : [{
            tagName : "path",
            attributes : {
              className : "cls-5",
              d : "M16.5,20a.49.49,0,0,1-.48.38.45.45,0,0,1-.48-.38l-1-9.1A1.47,1.47,0,0,1,16,9.29h0a1.47,1.47,0,0,1,1.47,1.63Z"
            },
            children : []
          }, {
            tagName : "circle",
            attributes : {
              className : "cls-5",
              cx : "16.02",
              cy : "23.33",
              r : "1.48"
            },
            children : []
          }]
        }]
      }]
    }];
  }
};