const parse = require('../../index.js');

module.exports = {
  name : '2 Children with 2 children',
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