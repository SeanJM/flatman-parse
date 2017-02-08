function isClosedTag(p) {
  const i = p.i;
  return p.str[i] + p.str[i + 1] === '</';
}