const parse = require("../../src/index.js");

module.exports = {
  name : "h4, p, hr, h6, ul, li",
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
    return parse(str);
  },
  isDeepEqual : function () {
    return [{
      tagName: "h4",
      attributes: {},
      children: [ "Theft &amp; Luggage" ]
    }, {
      tagName: "p",
      attributes: {},
      children: [ "Get new stuff when the old stuff is stolen or lost." ]
    }, {
      tagName: "hr",
      attributes: {},
      children: []
    }, {
      tagName: "h6",
      attributes: {},
      children: [ "Includes" ]
    }, {
      tagName: "ul",
      attributes: {},
      children: [{
        tagName: "li",
        attributes: {},
        children: [ "Theft of personal belongings" ]
      }, {
        tagName: "li",
        attributes: {},
        children: [ "Loss or damage of checked-in luggage" ]
      }, {
        tagName: "li",
        attributes: {},
        children: [ "Passport, tickets, drivers license" ]
      }, {
        tagName: "li",
        attributes: {},
        children: [ "Essential items for delayed baggage" ]
      }]
    }];
  }
};