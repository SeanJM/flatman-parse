const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'xml declaration',
  this : function () {
    return parse(`
<?xml version="1.0" encoding="utf-8"?>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'xml',
      version : '1.0',
      encoding : 'utf-8'
    }];
  }
};