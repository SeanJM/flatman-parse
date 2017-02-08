function captureDocType(p) {
  const str = p.str;
  let i = p.i;

  let rootElement = '';
  let type = '';
  let publicIdentifier = '';
  let privateIdentifier = '';
  let stringChar;

  i += 10; // Offset doctype

  while (!SPACE[str[i]] && str[i] !== '>' && str[i]) {
    rootElement += str[i];
    i += 1;
  }

  while (SPACE[str[i]] && str[i]) {
    i += 1;
  }

  while (!SPACE[str[i]] && str[i] !== '>' && str[i]) {
    type += str[i];
    i += 1;
  }

  if (str[i] !== '>') {
    while (str[i] !== '\'' && str[i] !== '\"' && str[i]) {
      i += 1;
    }

    stringChar = str[i];
    i += 1;

    while (str[i] !== stringChar && str[i]) {
      publicIdentifier += str[i];
      i += 1;
    }
    i += 1;

    while (str[i] !== '\'' && str[i] !== '\"' && str[i]) {
      i += 1;
    }

    stringChar = str[i];
    i += 1;

    while (str[i] !== stringChar && str[i]) {
      privateIdentifier += str[i];
      i += 1;
    }

    while (str[i] !== '>' && str[i]) {
      i += 1;
    }
  }

  p.i = i;
  p.nodes.push({
    tagName : 'doctype',
    rootElement : rootElement,
    type : type.length ? type.toLowerCase() : undefined,
    publicIdentifier : publicIdentifier.length ? publicIdentifier : undefined,
    privateIdentifier : privateIdentifier.length ? privateIdentifier : undefined
  });

  resetCapture(p);
}