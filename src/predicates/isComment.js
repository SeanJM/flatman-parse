function isComment(p) {
  const i = p.i;
  const s = p.str.substring(i, i + 4);
  return s === '<!--';
}