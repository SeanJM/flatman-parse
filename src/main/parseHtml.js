const { SPACE }        = require("../constants/");
const isOpenTag        = require("../predicates/isOpenTag");
const isText           = require("../predicates/isText");
const isComment        = require("../predicates/isComment");
const isDocType        = require("../predicates/isDocType");
const isXmlDeclaration = require("../predicates/isXmlDeclaration");
const captureDocType   = require("./captureDocType");
const captureNode      = require("./captureNode");

module.exports = function parseHtml(str) {
  var p = {
    content : '',
    str : str,
    i : 0,
    anchor : 0,
    open : 0,
    closed : 0,
    length : str.length,
    nodes : []
  };

  for (; p.i < p.length; p.i++) {
    if (!SPACE[p.str[p.i]]) {
      if (isOpenTag(p)) {
        captureNode(p);
      } else if (isText(p)) {
        captureText(p);
      } else if (isComment(p)) {
        captureComment(p);
      } else if (isDocType(p)) {
        captureDocType(p);
      } else if (isXmlDeclaration(p)) {
        captureXmlDeclaration(p);
      }
    }
  }

  return p.nodes;
};