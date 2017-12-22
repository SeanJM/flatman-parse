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