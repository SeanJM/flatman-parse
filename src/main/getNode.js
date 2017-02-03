function getNode(str) {
  let stringChar;

  let i = 0;
  let n = str.length;

  let node = {
    tagName : '',
    attributes : {},
    childNodes : []
  };

  let attr = {
    name : '',
    value : ''
  };

  while (!SPACE[str[i]] && str[i]) {
    node.tagName += str[i];
    i += 1;
  }

  node.tagName = node.tagName.toLowerCase();

  for (; i < n; i++) {
    while (SPACE[str[i]] && str[i]) {
      i += 1;
    }

    while (str[i] !== '=' && str[i]) {
      attr.name += str[i];
      i += 1;
    }

    if (str[i] === '=') {
      while (
        (str[i] !== '\'' && str[i] !== '\"')
        && str[i]
      ) {
        i += 1;
      }

      stringChar = str[i];
      i += 1;

      while (str[i] !== stringChar && str[i]) {
        attr.value += str[i];
        i += 1;
      }

      i += 1;
      node.attributes[filterAttributeName(attr.name)] = attr.value;
      attr.name = '';
      attr.value = '';
    }
  }

  return node;
}