function isOpenTag(p) {
  const i = p.i;
  const str = p.str;
  const p1 = str[i + 1];
  const p2 = str[i + 2];
  return (
    str[i] === '<'
    && (IS_LETTER[p1] && IS_LETTER[p2])
    && str.substring(i + 1, i + 10) !== 'arguments'
  );
}