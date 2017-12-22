const resetCapture = require("./resetCapture");

module.exports = function captureComment(p) {
  var childNodes = "";

  p.i += 4;

  while (
    p.str.substring(p.i, p.i + 3) !== "-->"
    && p.str[p.i]
  ) {
    childNodes += p.str[p.i];
    p.i += 1;
  }

  p.i += 3;

  p.nodes.push({
    tagName    : "comment",
    childNodes : childNodes.split("\n")
  });

  resetCapture(p);
};