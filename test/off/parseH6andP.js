const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'h6 + p',
  this : function () {
    return parse(`
<h6>Already have insurance?</h6>
<p>That's okay, we can make the switch for you</p>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'h6',
      attributes : {},
      childNodes : ['Already have insurance?']
    }, {
      tagName : 'p',
      attributes : {},
      childNodes : ['That\'s okay, we can make the switch for you']
    }];
  }
};