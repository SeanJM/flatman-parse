const parse = require("../../src/index.js");
const str   = `
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="flag-icon-css-dm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
   y="0px" viewBox="0 0 640 480" style="enable-background:new 0 0 640 480;" xml:space="preserve">
<style type="text/css">
  .st0{clip-path:url(#SVGID_2_);}
  .st1{fill:#108C00;}
  .st2{fill:#FFD600;}
  .st3{fill:#FFFFFF;}
  .st4{fill:#E72910;}
</style>
<g>
  <defs>
    <rect id="SVGID_1_" x="-0.2" width="641.7" height="481.3"/>
  </defs>
  <clipPath id="SVGID_2_">
    <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
  </clipPath>
  <g transform="translate(79.7) scale(.94)" class="st0">
    <path class="st1" d="M-258.3,0H769.2v512H-258.3L-258.3,0z"/>
    <path class="st2" d="M-260,178.2H772.6v50.2H-260V178.2z"/>
    <path class="st2" d="M181.1,0h48.4v512h-48.4V0z"/>
    <path d="M227.8,0h48.4v512h-48.4V0z"/>
    <path d="M-260,226.6H772.6v50.2H-260V226.6z"/>
    <path class="st3" d="M-260,276.8H772.6v50.2H-260V276.8z"/>
    <path class="st3" d="M276.2,0h48.4v512h-48.4V0z"/>
    <path class="st4" d="M257.7,393.9L257.7,393.9c-75.6,0-136.9-61.6-136.9-137.5v0c0-75.9,61.3-137.5,136.9-137.5l0,0
      c75.6,0,136.9,61.6,136.9,137.5v0C394.6,332.3,333.3,393.9,257.7,393.9z"/>
  </g>
</g>
</svg>
`;

module.exports = {
  name : "svg (use maybe closed)",
  this : function () {
    const p = parse(str);
    return p;
  },
  isDeepEqual : function () {
    return [{
      "tagName": "xml",
      "attributes": {
        "version": "1.0",
        "encoding": "utf-8"
      }
    },
    {
      "tagName": "comment",
      "children": [
        " Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  "
      ]
    },
    {
      "tagName": "svg",
      "attributes": {
        "version": "1.1",
        "id": "flag-icon-css-dm",
        "xmlns": "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "x": "0px",
        "y": "0px",
        "viewBox": "0 0 640 480",
        "style": {
          "enableBackground": "new 0 0 640 480"
        },
        "xml:space": "preserve"
      },
      "children": [
        {
          "tagName": "style",
          "attributes": {
            "type": "text/css"
          },
          "children": [
            "\n  .st0{clip-path:url(#SVGID_2_);}\n  .st1{fill:#108C00;}\n  .st2{fill:#FFD600;}\n  .st3{fill:#FFFFFF;}\n  .st4{fill:#E72910;}\n"
          ]
        },
        {
          "tagName": "g",
          "attributes": {},
          "children": [
            {
              "tagName": "defs",
              "attributes": {},
              "children": [
                {
                  "tagName": "rect",
                  "attributes": {
                    "id": "SVGID_1_",
                    "x": "-0.2",
                    "width": "641.7",
                    "height": "481.3"
                  },
                  "children": []
                }
              ]
            },
            {
              "tagName": "clippath",
              "attributes": {
                "id": "SVGID_2_"
              },
              "children": [
                {
                  "tagName": "use",
                  "attributes": {
                    "xlink:href": "#SVGID_1_",
                    "style": {
                      "overflow": "visible"
                    }
                  },
                  "children": []
                }
              ]
            },
            {
              "tagName": "g",
              "attributes": {
                "transform": "translate(79.7) scale(.94)",
                "className": "st0"
              },
              "children": [
                {
                  "tagName": "path",
                  "attributes": {
                    "className": "st1",
                    "d": "M-258.3,0H769.2v512H-258.3L-258.3,0z"
                  },
                  "children": []
                },
                {
                  "tagName": "path",
                  "attributes": {
                    "className": "st2",
                    "d": "M-260,178.2H772.6v50.2H-260V178.2z"
                  },
                  "children": []
                },
                {
                  "tagName": "path",
                  "attributes": {
                    "className": "st2",
                    "d": "M181.1,0h48.4v512h-48.4V0z"
                  },
                  "children": []
                },
                {
                  "tagName": "path",
                  "attributes": {
                    "d": "M227.8,0h48.4v512h-48.4V0z"
                  },
                  "children": []
                },
                {
                  "tagName": "path",
                  "attributes": {
                    "d": "M-260,226.6H772.6v50.2H-260V226.6z"
                  },
                  "children": []
                },
                {
                  "tagName": "path",
                  "attributes": {
                    "className": "st3",
                    "d": "M-260,276.8H772.6v50.2H-260V276.8z"
                  },
                  "children": []
                },
                {
                  "tagName": "path",
                  "attributes": {
                    "className": "st3",
                    "d": "M276.2,0h48.4v512h-48.4V0z"
                  },
                  "children": []
                },
                {
                  "tagName": "path",
                  "attributes": {
                    "className": "st4",
                    "d": "M257.7,393.9L257.7,393.9c-75.6,0-136.9-61.6-136.9-137.5v0c0-75.9,61.3-137.5,136.9-137.5l0,0\n      c75.6,0,136.9,61.6,136.9,137.5v0C394.6,332.3,333.3,393.9,257.7,393.9z"
                  },
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }];
  }
};