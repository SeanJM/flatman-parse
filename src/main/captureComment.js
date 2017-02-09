function captureComment(p) {
  var value = '';

  p.i += 4;

  while (
    p.str.substring(p.i, p.i + 3) !== '-->'
    && p.str[p.i]
  ) {
    value += p.str[p.i];
    p.i += 1;
  }

  p.i += 3;

  p.nodes.push({
    tagName : 'comment',
    value : value
  });

  resetCapture(p);
}