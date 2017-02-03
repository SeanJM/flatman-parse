function isClosedTag(p) {
  const i = p.i;
  const s = p.str.substring(i, i + 2);
  return s === '</';
}