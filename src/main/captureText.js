const isStringQuote       = require("../predicates/isStringQuote");
const isLineComment       = require("../predicates/isLineComment");
const isBlockComment      = require("../predicates/isBlockComment");
const isRegExp            = require("../predicates/isRegExp");
const isOpenTag           = require("../predicates/isOpenTag");
const isClosedTag         = require("../predicates/isClosedTag");

const captureString       = require("./captureString");
const captureLineComment  = require("./captureLineComment");
const captureBlockComment = require("./captureBlockComment");
const captureRegExp       = require("./captureRegExp");

const resetCapture        = require("./resetCapture");

module.exports = function captureText(p) {
  var capture = true;
  var temp;

  while (p.i < p.length && capture) {
    if (isStringQuote(p)) {
      captureString(p);
    }

    if (isLineComment(p)) {
      captureLineComment(p);
    }

    if (isBlockComment(p)) {
      captureBlockComment(p);
    }

    if (isRegExp(p)) {
      captureRegExp(p);
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