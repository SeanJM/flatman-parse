function isSelfClosingTag(p) {
  var i = p.i;
  var str = p.str
    .substring(i + 1, i + 8)
    .toLowerCase();

  return (
        SELF_CLOSING[
        str.substring(0, 2) ]
    ||  SELF_CLOSING[
        str.substring(0, 3) ]
    ||  SELF_CLOSING[
        str.substring(0, 4) ]
    ||  SELF_CLOSING[
        str.substring(0, 5) ]
    ||  SELF_CLOSING[
        str.substring(0, 6) ]
    ||  SELF_CLOSING[
        str ]
  );
}