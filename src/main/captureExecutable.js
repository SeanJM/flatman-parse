function captureExecutable(p) {
  let stringChar;
  let content = '';
  let capture = true;

  while (p.i < p.length && capture) {
    content += p.str[p.i];

    // Capture strings
    if (isStringQuote(p) && !stringChar) {
      stringChar = p.str[p.i];
      p.i += 1;

      while (p.str[p.i] !== stringChar && p.str[p.i]) {
        content += p.str[p.i];
        p.i += 1;
      }

      content += p.str[p.i];
      stringChar = undefined;
    }

    // Capture single line comment
    if (p.str[p.i] + p.str[p.i + 1] === '//') {
      p.i += 1;
      while (p.str[p.i] !== '\n' && p.str[p.i]) {
        content += p.str[p.i];
        p.i += 1;
      }
      content += p.str[p.i];
    }

    // Capture single block comment
    if (p.str[p.i] + p.str[p.i + 1] === '/*') {
      p.i += 1;
      while ((p.str[p.i] + p.str[p.i + 1] !== '*/') && p.str[p.i]) {
        content += p.str[p.i];
        p.i += 1;
      }
      content += p.str[p.i];
    }

    if (isClosedTag(p)) {
      // Trim the tag brace
      content = content.substring(0, content.length - 1);
      while (p.str[p.i] !== '>' && p.str[p.i]) {
        p.i += 1;
      }
      capture = false;
    }

    p.i += 1;
  }

  return content;
}