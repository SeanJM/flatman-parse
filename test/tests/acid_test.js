const fs = require('fs');
const path = require('path');
const parse = require('../../index.js');
const jquery = fs.readFileSync(path.resolve('test/jquery-3.1.1.min.js'), 'utf8');
const bootstrap = fs.readFileSync(path.resolve('test/bootstrap.min.css'), 'utf8');

module.exports = {
  name : 'The Acid Test',
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
    <script>${jquery}</script>
  </body>
</HTML>
`;
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'doctype',
      rootElement : 'html',
      type : undefined,
      publicIdentifier : undefined,
      privateIdentifier : undefined,
    }, {
      tagName : 'html',
      attributes : {},
      childNodes : [{
        tagName : 'head',
        attributes : {},
        childNodes : [{
          tagName : 'title',
          attributes : {},
          childNodes : [ 'HTML5 Introduction' ]
        }, {
          tagName : 'meta',
          attributes : {
            charset : 'utf-8'
          },
          childNodes : []
        }, {
          tagName : 'meta',
          attributes : {
            name : 'viewport',
            content : 'width=device-width, initial-scale=1'
          },
          childNodes : []
        }, {
          tagName : 'meta',
          attributes : {
            name : 'Keywords',
            content : 'HTML,CSS,JavaScript,SQL,PHP,jQuery,XML,DOM,Bootstrap,Web development,W3C,tutorials,programming,training,learning,quiz,primer,lessons,references,examples,source code,colors,demos,tips'
          },
          childNodes : []
        }, {
          tagName : 'meta',
          attributes : {
            name : 'Description',
            content : 'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, and XML.'
          },
          childNodes : []
        }, {
          tagName : 'link',
          attributes : {
            rel : 'icon',
            href : '/favicon.ico',
            type : 'image/x-icon'
          },
          childNodes : []
        }, {
          tagName : 'link',
          attributes : {
            rel : 'stylesheet',
            href : '/lib/w3.css'
          },
          childNodes : []
        }, {
          tagName : 'style',
          attributes : {},
          childNodes : [bootstrap]
        }]
      }, {
        tagName : 'body',
        attributes : {},
        childNodes : [{
          tagName : 'script',
          attributes : {},
          childNodes : [jquery]
        }]
      }]
    }];
  }
};