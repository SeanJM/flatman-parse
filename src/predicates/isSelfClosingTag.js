function isSelfClosingTag(p) {
  var i = p.i;
  var str = p.str
    .substring(i + 1, i + 9)
    .toLowerCase();

  return (
    SELF_CLOSING[
      str.substring(0, 2) ]
      && (GT[str[2]] || SPACE[str[2]]) ||
    SELF_CLOSING[
      str.substring(0, 3) ]
      && (GT[str[3]] || SPACE[str[3]]) ||
    SELF_CLOSING[
      str.substring(0, 4) ]
      && (GT[str[4]] || SPACE[str[4]]) ||
    SELF_CLOSING[
      str.substring(0, 5) ]
      && (GT[str[5]] || SPACE[str[5]]) ||
    SELF_CLOSING[
      str.substring(0, 6) ]
      && (GT[str[6]] || SPACE[str[6]]) ||
    SELF_CLOSING[
      str ]
      && (GT[str[2]] || SPACE[str[2]])
  );
}