const { MAYBE_SELF_CLOSING, IS_LETTER, SPACE } = require("../constants/");

module.exports = function isMaybeSelfClosingTag(p) {
  const str    = p.str;
  let i        = p.i;
  const isOpen = str[i] === "<" && IS_LETTER[str[i + 1]];
  let tagName  = "";

  if (isOpen) {
    i += 1;

    while (!SPACE[str[i]] && str[i]) {
      tagName += str[i];
      i += 1;
    }

    if (MAYBE_SELF_CLOSING[tagName.toLowerCase()]) {
      while (str[i] !== ">" && str[i]) {
        i += 1;
      }
      return str.substring(i - 1, i) !== "/>";
    }
  }

  return false;
};