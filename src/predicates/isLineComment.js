const { SPACE } = require("../constants/");

module.exports = function isLineComment(p) {
  var i = p.i;
  var str = p.str;
  return str[i] + str[i + 1] === "//" && SPACE[str[i - 1]];
};