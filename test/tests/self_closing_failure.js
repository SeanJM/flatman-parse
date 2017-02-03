const parse = require('../../index.js');

module.exports = {
  name : 'Self closing div (error)',
  isFailure : function () {
    return parse(`
<div/>
    `);
  }
};