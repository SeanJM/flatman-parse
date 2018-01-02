const parse = require("../../src/index.js");

module.exports = {
  name : "Heading with string, element sibling",
  this : function () {
    const str = `
      <h4>a<strong>b</strong>c</h4>
    `;
    const p   = parse(str);
    return p;
  },
  isDeepEqual : function () {
    return [
      {
        "tagName": "h4",
        "attributes": {},
        "childNodes": [
          "a",
          {
            "tagName": "strong",
            "attributes": {},
            "childNodes": [
              "b"
            ]
          },
          "c"
        ]
      }
    ];
  }
};