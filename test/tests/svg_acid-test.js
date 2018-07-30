const parse = require("../../src/index.js");
const fs = require("fs");
const path = require("path");

const svg = fs.readFileSync(path.resolve("test/svg-acid-test.svg"), "utf8");

module.exports = {
  name : "svg (acid test)",
  this : function () {
    return parse(svg);
  },
  isDeepEqual : function () {
    return [{
      tagName: "svg",
      attributes: {
        xmlns: "http://www.w3.org/2000/svg"
      },
      children: [{
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_add"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: ["icon"]
        }, {
          tagName: "path",
          attributes: {
            d: "M18,10.56H13.44V6a1.23,1.23,0,0,0-1.23-1.23h-.42A1.23,1.23,0,0,0,10.56,6v4.58H6a1.23,1.23,0,0,0-1.23,1.23v.42A1.23,1.23,0,0,0,6,13.44h4.58V18a1.23,1.23,0,0,0,1.23,1.23h.42A1.23,1.23,0,0,0,13.44,18V13.44H18a1.23,1.23,0,0,0,1.23-1.23v-.42A1.23,1.23,0,0,0,18,10.56Z"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_connect"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: ["icon"]
        }, {
          tagName: "path",
          attributes: {
            d: "M13.52,14.87,11.85,17A1.81,1.81,0,0,1,9,17L3.42,6.87a.82.82,0,0,1,1-1.12l6.72,4.18L12.6,7.71a1.71,1.71,0,0,1,2.88,0l5.34,9.62a1,1,0,0,1-1.3,1.44Z"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_delete"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: [
            "icon"
          ]
        }, {
          tagName: "path",
          attributes: {
            d: "M6,17.75a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V10H6Z"
          },
          children: []
        }, {
          tagName: "path",
          attributes: {
            d: "M17.43,5.75H15V4.94a.69.69,0,0,0-.69-.69H9.69A.69.69,0,0,0,9,4.94v.81H6.57a1.09,1.09,0,0,0-1,1.41L6,8.46H18l.48-1.3A1.09,1.09,0,0,0,17.43,5.75Z"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_disconnect"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: ["icon"]
        }, {
          tagName: "path",
          attributes: {
            d: "M15.16,8.62l-.52-.93a1.71,1.71,0,0,0-2.88,0L10.32,9.93,3.59,5.75a.82.82,0,0,0-1,1.12l5,9.17Z"
          },
          children: []
        }, {
          tagName: "path",
          attributes: {
            d: "M21.32,17.31,16.6,8.8,9,16.22l.43.77a1.81,1.81,0,0,0,2.87,0L14,14.87l6,3.88A1,1,0,0,0,21.32,17.31Z"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_download"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: ["icon"]
        }, {
          tagName: "path",
          attributes: {
            d: "M17.68,9.16H15v-5a.56.56,0,0,0-.56-.56H9.56A.56.56,0,0,0,9,4.21v5H6.32A.69.69,0,0,0,5.8,10.3l5,5.75a1.64,1.64,0,0,0,2.47,0l5-5.75A.69.69,0,0,0,17.68,9.16Z"
          },
          children: []
        }, {
          tagName: "rect",
          attributes: {
            x: "6",
            y: "18",
            width: "12",
            height: "2"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_error"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: ["icon"]
        }, {
          tagName: "path",
          attributes: {
            d: "M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm3.43,10.76a1,1,0,0,1,0,1.48l-.18.18a1,1,0,0,1-1.48,0L12,13.67l-1.76,1.76a1,1,0,0,1-1.48,0l-.18-.18a1,1,0,0,1,0-1.48L10.33,12,8.57,10.24a1,1,0,0,1,0-1.48l.18-.18a1,1,0,0,1,1.48,0L12,10.33l1.76-1.76a1,1,0,0,1,1.48,0l.18.18a1,1,0,0,1,0,1.48L13.67,12Z"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_info"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: ["icon"]
        }, {
          tagName: "path",
          attributes: {
            d: "M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm1,14H11V11h2Zm0-8H11V7h2Z"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_search"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: ["icon"]
        }, {
          tagName: "rect",
          attributes: {
            x: "14.37",
            y: "11.75",
            width: "1.33",
            height: "6.49",
            transform: "translate(-6.2 15.02) rotate(-45)"
          },
          children: []
        }, {
          tagName: "rect",
          attributes: {
            x: "15.85",
            y: "13.77",
            width: "2.37",
            height: "6.44",
            rx: "0.67",
            ry: "0.67",
            transform: "translate(-7.03 17.02) rotate(-45)"
          },
          children: []
        }, {
          tagName: "path",
          attributes: {
            d: "M9.89,4a5.89,5.89,0,1,0,5.89,5.89A5.89,5.89,0,0,0,9.89,4Zm0,9.75a3.86,3.86,0,1,1,3.86-3.86A3.86,3.86,0,0,1,9.89,13.75Z"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_star"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: [
            "icon"
          ]
        }, {
          tagName: "path",
          attributes: {
            d: "M12.71,4.63l1.84,4.56,4.95.37a.76.76,0,0,1,.43,1.35L16.12,14l1.21,4.84a.76.76,0,0,1-1.15.83L12,17,7.81,19.71a.76.76,0,0,1-1.15-.83L7.88,14l-3.8-3.13A.76.76,0,0,1,4.5,9.56l4.95-.37,1.84-4.56A.76.76,0,0,1,12.71,4.63Z"
          },
          children: []
        }]
      }, {
        tagName: "symbol",
        attributes: {
          viewBox: "0 0 24 24",
          id: "icon_target"
        },
        children: [{
          tagName: "title",
          attributes: {},
          children: [
            "icon"
          ]
        }, {
          tagName: "path",
          attributes: {
            d: "M12,21.33A9.33,9.33,0,1,1,21.33,12,9.34,9.34,0,0,1,12,21.33ZM12,4.17A7.83,7.83,0,1,0,19.83,12,7.84,7.84,0,0,0,12,4.17Z"
          },
          children: []
        }, {
          tagName: "path",
          attributes: {
            d: "M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,8.65A2.62,2.62,0,1,1,14.62,12,2.62,2.62,0,0,1,12,14.62Z"
          },
          children: []
        }]
      }]
    }];
  }
};