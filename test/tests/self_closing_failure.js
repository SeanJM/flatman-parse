const parse = require("../../src/index.js");

module.exports = {
  name : "<div/> (error)",
  isFailure : function () {
    return parse(`
<div/>
    `);
  }
};