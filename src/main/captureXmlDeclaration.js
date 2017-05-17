function captureXmlDeclaration(p) {
  var node = {
    tagName : 'xml'
  };

  var attr = '';
  var temp = [];
  var str = p.str;
  var i = p.i;

  i += 6; // Offset

  while (!XML_END[str[i - 1] + str[i]] && str[i]) {
    attr += str[i];
    i += 1;

    if (SPACE[str[i]] || XML_END[str[i - 1] + str[i]]) {
      temp = attr.split('=');

      while (!QUOTE[temp[1][0]]) {
        temp[1] = temp[1].substring(1);
      }

      while (!QUOTE[temp[1][temp[1].length - 1]]) {
        temp[1] = temp[1].substring(0, temp[1].length - 1);
      }

      temp[1] = temp[1].substring(1, temp[1].length - 1);
      node[temp[0]] = temp[1];
      attr = '';
    }

    while (SPACE[str[i]] && str[i]) {
      i += 1;
    }
  }

  p.i = i;
  p.nodes.push(node);
  resetCapture(p);
}