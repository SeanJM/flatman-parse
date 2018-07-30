const parse = require("../../src/index.js");
const fs = require("fs");
const path = require("path");

const svg = fs.readFileSync(path.resolve("test/assets/svg_closed_circle.html"), "utf8");

module.exports = {
  name : "svg (closed circle)",
  this : function () {
    const parsed = parse(svg);
    return parsed;
  },
  isDeepEqual : function () {
    return [
      {
        "tagName": "svg",
        "attributes": {
          "xmlns": "http://www.w3.org/2000/svg"
        },
        "children": [
          {
            "tagName": "symbol",
            "attributes": {
              "id": "sprite-icon_more-vertical",
              "viewBox": "0 0 48 48"
            },
            "children": [
              {
                "tagName": "circle",
                "attributes": {
                  "cx": "24",
                  "cy": "9",
                  "r": "5"
                },
                "children": []
              }
            ]
          }
        ]
      }
    ];
  }
};