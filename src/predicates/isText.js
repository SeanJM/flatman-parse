const { SPACE } = require("../constants");

module.exports = function isText(p) {
  let i = p.i;

  while (SPACE[p.str[i]] && p.str[i]) {
    i += 1;
  }

  return p.str[i] !== "<" && p.str.substring(p.anchor, i).indexOf("<") === -1;
};