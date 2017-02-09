const parse = require('../../flatman-parse.js');

module.exports = {
  name : '<div/> (error)',
  isFailure : function () {
    return parse(`
<div/>
    `);
  }
};