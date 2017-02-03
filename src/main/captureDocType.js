function captureDocType(p) {
  let inner = '';
  let identifiers = [];
  let identifiersString;
  let rootAndType;
  let strChar;

  p.i += 2;

  while (
    p.str.substring(p.i, p.i + 1) !== '>'
    && p.str[p.i]
  ) {
    inner += p.str[p.i];
    p.i += 1;

    if ((
      p.str[p.i] === '"'
      || p.str[p.i] === '\''
    ) && !strChar) {
      strChar = p.str[p.i];
      identifiersString = '';
      while (p.str[p.i + 1] !== strChar && p.str[p.i]) {
        p.i += 1;
        identifiersString += p.str[p.i];
      }
      p.i += 1;
      strChar = undefined;
      identifiers.push(identifiersString);
    }
  }

  p.i += 1;
  rootAndType = inner.split(' ');

  p.nodes.push({
    tagName : 'doctype',
    rootElement : rootAndType[1],
    type : rootAndType[2] && rootAndType[2].trim().toLowerCase(),
    publicIdentifier : identifiers[0],
    privateIdentifier : identifiers[1]
  });

  resetCapture(p);
}