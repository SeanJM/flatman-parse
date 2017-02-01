function parse(str) {
  var n = str.length;
  var i = 0;
  var nodes = [];
  var node;

  var anchor = 0;
  var open = 0;
  var closed = 0;

  var content = '';
  var innerTag = '';

  function reset() {
    open = 0;
    closed = 0;
    anchor = i;
    content = '';
  }

  function captureText() {
    var t;
    while (str[i] !== '<' && i < n) {
      i += 1;
    }
    i--;
    t = str.substring(anchor, i + 1);
    if (t.trim()) {
      nodes.push(str.substring(anchor, i + 1));
    }
    reset();
  }

  function captureTag() {
    var capture = true;

    // Get inner tag
    open += 1;
    i += 1;
    while (str[i] !== '>' && str[i]) {
      innerTag += str[i];
      i += 1;
    }
    i += 1;

    if (innerTag[i - 3] === '/') {
      node = getNode(innerTag.substring(0, innerTag.length - 1));
      capture = false;
      nodes.push(node);
      reset();
    } else {
      node = getNode(innerTag);
    }

    innerTag = '';

    if (isSelfClosingTag(node.tagName)) {
      capture = false;
      nodes.push(node);
      reset();
    }

    while (i < n && capture) {
      if (isOpenAndClosed(str, i)) {
        open += 1;
        closed += 1;
      } else if (isOpenTag(str, i)) {
        open += 1;
      } if (isClosedTag(str, i)) {
        closed += 1;
      }

      if (open - closed === 0) {
        node.childNodes = parse(content);
        nodes.push(node);

        // Go to the end of the closed tag
        while (str[i] !== '>' && str[i]) i++;

        reset();
        capture = false;
      }

      if (open > closed) {
        content += str[i];
      }

      i++;
    }
  }

  for (; i < n; i++) {
    if (!isSpace(str[i])) {
      if (isOpenTag(str, i)) {
        captureTag();
      } else if (isText(str, i)) {
        captureText();
      }
    }
  }
  return nodes;
}