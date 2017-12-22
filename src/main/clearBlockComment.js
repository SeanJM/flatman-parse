const isOpenTag = require("../predicates/isOpenTag");
const isClosedTag = require("../predicates/isClosedTag");

module.exports = function clearBlockComment(p) {
  var isEnd = false;
  var init = p.i;
  var i = p.i;
  var str = p.str;

  p.content += str[i];
  i += 1;

  for (; !isEnd && str[i]; i++) {
    isEnd = str[i - 1] + str[i] === "*/";
    p.content += str[i];
  }

  if (!isEnd) {
    while (!isOpenTag(p) && !isClosedTag(p) && i > init) {
      p.content = str.substring(init, i);
      i -= 1;
    }
  }

  p.i = i;
};