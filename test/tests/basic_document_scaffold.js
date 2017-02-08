const parse = require('../../index.js');

module.exports = {
  name : 'Basic scaffold',
  this : function () {
    const str = `
<!DOCTYPE html>
<HTML>
  <head>
  </head>
  <body>
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
        childNodes : []
      }, {
        tagName : 'body',
        attributes : {},
        childNodes : []
      }]
    }];
  }
};