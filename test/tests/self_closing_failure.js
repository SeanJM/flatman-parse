const parse = require('../../index.js');

module.exports = {
  name : '<div/> (error)',
  isFailure : function () {
    return parse(`
<div/>
    `);
  }
};