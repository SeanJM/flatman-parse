const parse = require('../../index.js');

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
  </head>
  <body>
    <div class="titlebar"></div>
    <div class="content">
      <p>Welcome to my test</p>
      <hr>
      <input type="text" class="input-group" />
      Some text
      <span
        class="span-class"
        id="multi"
        data-test="test"
      ></span>
    </div>
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
        }]
      }, {
        tagName : 'body',
        attributes : {},
        childNodes : [{
          tagName : 'div',
          attributes : {
            className : 'titlebar'
          },
          childNodes : []
        }, {
          tagName : 'div',
          attributes : {
            className : 'content'
          },
          childNodes : [{
            tagName : 'p',
            attributes : {},
            childNodes : [ 'Welcome to my test' ]
          }, {
            tagName : 'hr',
            attributes : {},
            childNodes : []
          }, {
            tagName : 'input',
            attributes : {
              type : 'text',
              className : 'input-group'
            },
            childNodes : []
          },
            '      Some text', {
            tagName : 'span',
            attributes : {
              className : 'span-class',
              id : 'multi',
              'data-test' : 'test'
            },
            childNodes : []
          }]
        }]
      }]
    }];
  }
};