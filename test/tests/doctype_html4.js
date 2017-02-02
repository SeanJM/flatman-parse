const parse = require('../../index.js');

module.exports = {
  name : 'Doc type HTML4',
  this : function () {
    return parse(`
<!DOCTYPE html PUBLIC
  "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
`);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'doctype',
      rootElement : 'html',
      type : 'public',
      publicIdentifier : '-//W3C//DTD XHTML 1.0 Transitional//EN',
      privateIdentifier : 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'
    }];
  }
};