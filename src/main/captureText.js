const isStringQuote       = require("../predicates/isStringQuote");
const isLineComment       = require("../predicates/isLineComment");
const isBlockComment      = require("../predicates/isBlockComment");
const isRegExp            = require("../predicates/isRegExp");
const isOpenTag           = require("../predicates/isOpenTag");
const isClosedTag         = require("../predicates/isClosedTag");

const clearString         = require("./clearString");
const clearLineComment    = require("./clearLineComment");
const clearBlockComment   = require("./clearBlockComment");
const clearRegExp         = require("./clearRegExp");

const resetCapture        = require("./resetCapture");

module.exports = function captureText(p) {
  let capture = true;
  let temp;

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

    if (isOpenTag(p) || isClosedTag(p)) {
      capture = false;
    } else {
      p.i += 1;
    }
  }

  p.i -= 1;

  temp = p.str.substring(
    p.anchor,
    p.i + 1
  );

  if (temp.trim()) {
    p.nodes.push(temp);
  }

  resetCapture(p);
};