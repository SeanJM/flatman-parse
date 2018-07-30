const parse = require("../../src/index.js");

module.exports = {
  name: "Custom tags",
  this: function () {
    let s = parse(`
<event>
  <title>Design Leadership Summit</title>
  <href>https://www.designleadershipnetwork.org/</href>
  <date>
    <date>1472012849961</date>
    <date>1472022849961</date>
  </date>
  <content>
    The Design Leadership Network will host its eleventh annual Design Leadership Summit, which will provide DLS attendees with pre-show access to Design Miami and Art Basel.
  </content>
  <location>Miami</location>
</event>
`);

    return s;
  },
  isDeepEqual: function () {
    return [{
      tagName: "event",
      attributes: {},
      children: [{
        tagName: "title",
        attributes: {},
        children: ["Design Leadership Summit"]
      }, {
        tagName: "href",
        attributes: {},
        children: ["https://www.designleadershipnetwork.org/"]
      }, {
        tagName: "date",
        attributes: {},
        children: [{
          tagName: "date",
          attributes: {},
          children: ["1472012849961"]
        }, {
          tagName: "date",
          attributes: {},
          children: ["1472022849961"]
        }]
      }, {
        tagName: "content",
        attributes: {},
        children: ["\n    The Design Leadership Network will host its eleventh annual Design Leadership Summit, which will provide DLS attendees with pre-show access to Design Miami and Art Basel.\n  "]
      }, {
        tagName: "location",
        attributes: {},
        children: ["Miami"]
      }]
    }];
  }
};