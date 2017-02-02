const parse = require('../../index.js');

module.exports = {
  name : 'Doc type',
  this : function () {
    return parse(`<!DOCTYPE html>`);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'doctype',
      rootElement : 'html',
      type : undefined,
      publicIdentifier : undefined,
      privateIdentifier : undefined,
    }];
  }
};