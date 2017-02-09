function isClosedTag(p) {
  var i = p.i;
  return p.str[i] + p.str[i + 1] === '</';
}