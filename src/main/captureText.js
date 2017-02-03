function captureText(p) {
  let temp;

  while (p.str[p.i] !== '<' && p.i < p.length) {
    p.i += 1;
  }

  p.i -= 1;

  temp = p.str.substring(
    p.anchor,
    p.i + 1
  );

  if (temp[0] === '\n') {
    temp = temp.substring(1, temp.length);
  }

  if (temp.trim()) {
    p.nodes.push(temp.trimRight());
  }

  resetCapture(p);
}