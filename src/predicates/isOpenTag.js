const { IS_LETTER, TAG_HEADER } = require("../constants/");

module.exports = function isOpenTag(p) {
  var i   = p.i;
  var str = p.str;
  var p1  = str[i + 1];
  var p2  = str[i + 2];

  return (
    str[i] === "<"
    && (
      (IS_LETTER[p1] && (IS_LETTER[p2] || p2 === " " || p2 === ">"))
      || TAG_HEADER[p1 + p2]
    )
    && str.substring(i + 1, i + 10) !== "arguments"
  );
};