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
      tagName           : "doctype",
      rootElement       : "html",
      type              : undefined,
      publicIdentifier  : undefined,
      privateIdentifier : undefined
    }, {
      tagName : "html",
      attributes : { lang : "en" },
      childNodes : [{
        tagName : "body",
        attributes : {},
        childNodes : [{
          tagName    : "comment",
          childNodes : [
            "",
            "      This HTML file is a template.",
            "      If you open it directly in the browser, you will see an empty page.",
            "",
            "      You can add webfonts, meta tags, or analytics to this file.",
            "      The build step will place the bundled scripts into the <body> tag.",
            "",
            "      To begin the development, run `npm start` or `yarn start`.",
            "      To create a production bundle, use `npm run build` or `yarn build`.",
            "    "
          ]
        }]
      }]
    }];
  }
};