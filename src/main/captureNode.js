function captureNode(p) {
  var hasSlash = false;
  var capture = true;
  var innerTag = '';
  var node;

  // Get inner tag
  p.open += 1;
  p.i += 1;

  while (p.str[p.i] !== '>' && p.str[p.i]) {
    innerTag += p.str[p.i];
    p.i += 1;
  }

  if (innerTag[innerTag.length - 1] === '/') {
    innerTag = innerTag.substring(0, innerTag.length - 1);
    hasSlash = true;
  }

  p.i += 1;
  node = getNode(innerTag);
  innerTag = '';
  if (hasSlash && SELF_CLOSING[node.tagName] || SELF_CLOSING[node.tagName]) {
    capture = false;
    p.nodes.push(node);
    resetCapture(p);
  } else if (hasSlash) {
    throw new Error('Tag: \'' + node.tagName + '\' is not a self closing tag.');
  }

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

    if (isSelfClosingTag(p)) {
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
      while (p.str[p.i] !== '>' && p.str[p.i]) {
        p.i += 1;
      }

      resetCapture(p);
      capture = false;
    }

    if (p.open > p.closed) {
      p.content += p.str[p.i];
    }

    p.i += 1;
  }
}