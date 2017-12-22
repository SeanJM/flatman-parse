const fs = require("fs");
const path = require("path");
const parse = require("../../src/index.js");
const jquery = fs.readFileSync(path.resolve("test/jquery-3.1.1.min.js"), "utf8");
const bootstrap = fs.readFileSync(path.resolve("test/bootstrap.min.css"), "utf8");
const loremIpsum = fs.readFileSync(path.resolve("test/lorem-ipsum.txt"), "utf8");

module.exports = {
  name : "The Acid Test",
  this : function () {
    const str = `
<!DOCTYPE html>
<HTML>
  <head>
    <title>HTML5 Introduction</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Keywords" content="HTML,CSS,JavaScript,SQL,PHP,jQuery,XML,DOM,Bootstrap,Web development,W3C,tutorials,programming,training,learning,quiz,primer,lessons,references,examples,source code,colors,demos,tips">
    <meta name="Description" content="Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, and XML.">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/lib/w3.css">
    <style>${bootstrap}</style>
  </head>
  <body>
    <div class="titlebar" id="titlebar">
      <div class="titlebar_menu">
        <div class="titlebar_menu_input">
          <span class="icon icon-hamburger"></span>
        </div>
      </div>
      <ul class="titlebar_menu-list">
        <li class="titlebar_menu-list_item">Home</li>
        <li class="titlebar_menu-list_item">Portfolio</li>
        <li class="titlebar_menu-list_item">Social Media</li>
        <li class="titlebar_menu-list_item">About</li>
      </ul>
      <div class="titlebar_logo"></div>
      <div class="titlebar_control"></div>
    </div>
    <div class="content">${loremIpsum}</div>
    <script>${jquery}</script>
  </body>
</HTML>
`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : "doctype",
      rootElement : "html",
      type : undefined,
      publicIdentifier : undefined,
      privateIdentifier : undefined,
    }, {
      tagName : "html",
      attributes : {},
      childNodes : [{
        tagName : "head",
        attributes : {},
        childNodes : [{
          tagName : "title",
          attributes : {},
          childNodes : [ "HTML5 Introduction" ]
        }, {
          tagName : "meta",
          attributes : {
            charset : "utf-8"
          },
          childNodes : []
        }, {
          tagName : "meta",
          attributes : {
            name : "viewport",
            content : "width=device-width, initial-scale=1"
          },
          childNodes : []
        }, {
          tagName : "meta",
          attributes : {
            name : "Keywords",
            content : "HTML,CSS,JavaScript,SQL,PHP,jQuery,XML,DOM,Bootstrap,Web development,W3C,tutorials,programming,training,learning,quiz,primer,lessons,references,examples,source code,colors,demos,tips"
          },
          childNodes : []
        }, {
          tagName : "meta",
          attributes : {
            name : "Description",
            content : "Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, and XML."
          },
          childNodes : []
        }, {
          tagName : "link",
          attributes : {
            rel : "icon",
            href : "/favicon.ico",
            type : "image/x-icon"
          },
          childNodes : []
        }, {
          tagName : "link",
          attributes : {
            rel : "stylesheet",
            href : "/lib/w3.css"
          },
          childNodes : []
        }, {
          tagName : "style",
          attributes : {},
          childNodes : [bootstrap]
        }]
      }, {
        tagName : "body",
        attributes : {},
        childNodes : [{
          tagName : "div",
          attributes : {
            className : "titlebar",
            id : "titlebar"
          },
          childNodes : [{
            tagName : "div",
            attributes : {
              className : "titlebar_menu"
            },
            childNodes : [{
              tagName : "div",
              attributes : {
                className : "titlebar_menu_input"
              },
              childNodes : [{
                tagName : "span",
                attributes : {
                  className : "icon icon-hamburger"
                },
                childNodes : []
              }]
            }]
          }, {
            tagName : "ul",
            attributes : {
              className : "titlebar_menu-list"
            },
            childNodes : [{
              tagName : "li",
              attributes : {
                className : "titlebar_menu-list_item"
              },
              childNodes : [ "Home" ]
            }, {
              tagName : "li",
              attributes : {
                className : "titlebar_menu-list_item"
              },
              childNodes : [ "Portfolio" ]
            }, {
              tagName : "li",
              attributes : {
                className : "titlebar_menu-list_item"
              },
              childNodes : [ "Social Media" ]
            }, {
              tagName : "li",
              attributes : {
                className : "titlebar_menu-list_item"
              },
              childNodes : [ "About" ]
            }]
          }, {
            tagName : "div",
            attributes : {
              className : "titlebar_logo"
            },
            childNodes : []
          }, {
            tagName : "div",
            attributes : {
              className : "titlebar_control"
            },
            childNodes : []
          }]
        }, {
          tagName : "div",
          attributes : {
            className : "content"
          },
          childNodes : [loremIpsum]
        }, {
          tagName : "script",
          attributes : {},
          childNodes : [jquery]
        }]
      }]
    }];
  }
};