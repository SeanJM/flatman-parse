const parse = require("../../src/index.js");
const fs = require("fs");
const path = require("path");

const svg = fs.readFileSync(path.resolve("test/assets/svg_open_circle.html"), "utf8");

module.exports = {
  name : "svg (open circle)",
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
        "childNodes": [
          {
            "tagName": "symbol",
            "attributes": {
              "id": "sprite-icon_more-vertical",
              "viewBox": "0 0 48 48"
            },
            "childNodes": [
              {
                "tagName": "circle",
                "attributes": {
                  "cx": "24",
                  "cy": "9",
                  "r": "5"
                },
                "childNodes": []
              }
            ]
          }
        ]
      }
    ];
  }
};