const { SPACE, SELF_CLOSING, MAYBE_SELF_CLOSING } = require("../constants/");
const isOpenTag               = require("../predicates/isOpenTag");
const isText                  = require("../predicates/isText");
const isComment               = require("../predicates/isComment");
const isDocType               = require("../predicates/isDocType");
const isXmlDeclaration        = require("../predicates/isXmlDeclaration");

const captureComment          = require("./captureComment");
const captureDocType          = require("./captureDocType");
const captureText             = require("./captureText");
const captureXmlDeclaration   = require("./captureXmlDeclaration");

const clearBlockComment       = require("./clearBlockComment");
const clearComment            = require("./clearComment");
const clearLineComment        = require("./clearLineComment");
const clearRegExp             = require("./clearRegExp");
const clearString             = require("./clearString");

const getNode                 = require("./getNode");
const resetCapture            = require("./resetCapture");

const isBlockComment          = require("../predicates/isBlockComment");
const isMaybeSelfClosingTag   = require("../predicates/isMaybeSelfClosingTag");
const isClosedTag             = require("../predicates/isClosedTag");
const isOpenComment           = require("../predicates/isOpenComment");
const isLineComment           = require("../predicates/isLineComment");
const isRegExp                = require("../predicates/isRegExp");
const isSelfClosingTag        = require("../predicates/isSelfClosingTag");
const isStringQuote           = require("../predicates/isStringQuote");

function captureNode(p) {
  var hasSlash = false;
  var capture  = true;
  var innerTag = "";
  var node;

  // Get inner tag
  p.open += 1;
  p.i += 1;

  while (p.str[p.i] !== ">" && p.str[p.i]) {
    innerTag += p.str[p.i];
    p.i += 1;
  }

  if (innerTag[innerTag.length - 1] === "/") {
    innerTag = innerTag.substring(0, innerTag.length - 1);
    hasSlash = true;
  }

  p.i += 1;
  node = getNode(innerTag);
  innerTag = "";

  if (hasSlash && (SELF_CLOSING[node.tagName] || MAYBE_SELF_CLOSING[node.tagName]) || SELF_CLOSING[node.tagName]) {
    capture = false;
    p.nodes.push(node);
    resetCapture(p);
    p.i -= 1;
  } else if (hasSlash && !MAYBE_SELF_CLOSING[node.tagName]) {
    throw new Error("Tag: '" + node.tagName + "' is not a self closing tag.");
  }

  while (p.i < p.length && capture) {
    if (isStringQuote(p)) {
      clearString(p);
    }

    if (isLineComment(p)) {
      clearLineComment(p);
    }

    if (isBlockComment(p)) {
      clearBlockComment(p);
    }

    if (isRegExp(p)) {
      clearRegExp(p);
    }

    if (isOpenComment(p)) {
      clearComment(p);
    }

    if (isMaybeSelfClosingTag(p)) {
      p.open += 1;
      p.closed += 1;
    } else if (isSelfClosingTag(p)) {
      p.open += 1;
      p.closed += 1;
    } else if (isOpenTag(p)) {
      p.open += 1;
    } if (isClosedTag(p)) {
      p.closed += 1;
    }

    if (p.open - p.closed === 0) {
      node.childNodes = parseHtml(p.content);
      p.nodes.push(node);

      // Go to the end of the closed tag
      p.i     = p.str.indexOf(">", p.i);
      capture = false;
      resetCapture(p);
      p.i -= 1;
    }

    if (p.open > p.closed) {
      p.content += p.str[p.i];
    }

    p.i += 1;
  }
}

function parseHtml(str) {
  var p = {
    content : "",
    str     : str,
    i       : 0,
    anchor  : 0,
    open    : 0,
    closed  : 0,
    length  : str.length,
    nodes   : []
  };

  while (SPACE[p.str[p.i]] && p.str[p.i]) {
    p.i += 1;
  }

  while (p.i < p.length) {
    if (isOpenTag(p)) {
      captureNode(p);
    }

    if (isText(p)) {
      captureText(p);
    }

    if (isComment(p)) {
      captureComment(p);
    }

    if (isDocType(p)) {
      captureDocType(p);
    }

    if (isXmlDeclaration(p)) {
      captureXmlDeclaration(p);
    }

    p.i += 1;
  }

  return p.nodes;
}

module.exports = parseHtml;