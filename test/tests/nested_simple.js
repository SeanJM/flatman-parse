const parse = require('../../flatman-parse.js');

module.exports = {
  name : '(div > div + div) * 2',
  this : function () {
    return parse(`
<div class="parent">
  <div class="parent-1"></div>
  <div class="parent-2"></div>
</div>
<div class="parent2">
  <div class="parent2-1"></div>
  <div class="parent2-2"></div>
</div>
    `);
  },
  isDeepEqual : function () {
    return [{
      tagName : 'div',
      attributes : {
        className : 'parent'
      },
      childNodes : [{
        tagName : 'div',
        attributes : {
          className : 'parent-1'
        },
        childNodes : []
      }, {
        tagName : 'div',
        attributes : {
          className : 'parent-2'
        },
        childNodes : []
      }]
    }, {
      tagName : 'div',
      attributes : {
        className : 'parent2'
      },
      childNodes : [{
        tagName : 'div',
        attributes : {
          className : 'parent2-1'
        },
        childNodes : []
      }, {
        tagName : 'div',
        attributes : {
          className : 'parent2-2'
        },
        childNodes : []
      }]
    }];
  }
};