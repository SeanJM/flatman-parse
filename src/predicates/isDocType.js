function isDocType(p) {
  const i = p.i;
  const s = p.str
    .substring(i, i + 9)
    .toLowerCase();
  return s === '<!doctype';
}