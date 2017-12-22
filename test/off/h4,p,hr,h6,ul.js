const parse = require('../../flatman-parse.js');

module.exports = {
  name : 'h4, p, hr, h6, ul, li',
  this : function () {
    const str = `
<h4>Theft &amp; Luggage</h4>
<p>Get new stuff when the old stuff is stolen or lost.</p>
<hr>
<h6>Includes</h6>
<ul>
  <li>Theft of personal belongings</li>
  <li>Loss or damage of checked-in luggage</li>
  <li>Passport, tickets, drivers license</li>
  <li>Essential items for delayed baggage</li>
</ul>
`;
    console.log(parse(str)[4]);
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName: 'h4',
      attributes: {},
      childNodes: [ 'Theft &amp; Luggage' ]
    }, {
      tagName: 'p',
      attributes: {},
      childNodes: [ 'Get new stuff when the old stuff is stolen or lost.' ]
    }, {
      tagName: 'hr',
      attributes: {},
      childNodes: []
    }, {
      tagName: 'h6',
      attributes: {},
      childNodes: [ 'Includes' ]
    }, {
      tagName: 'ul',
      attributes: {},
      childNodes: [{
        tagName: 'li',
        attributes: {},
        childNodes: [ "Theft of personal belongings" ]
      }, {
        tagName: 'li',
        attributes: {},
        childNodes: [ "Loss or damage of checked-in luggage" ]
      }, {
        tagName: 'li',
        attributes: {},
        childNodes: [ "Passport, tickets, drivers license" ]
      }, {
        tagName: 'li',
        attributes: {},
        childNodes: [ "Essential items for delayed baggage" ]
      }]
    }]
  }
};