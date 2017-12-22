module.exports = function captureLineComment(p) {
  var i = p.i;
  var str = p.str;

  p.content += str[i] + str[i + 1];
  i += 2;

  while (str[i] !== "\n" && str[i]) {
    p.content += str[i];
    i += 1;
  }

  p.i = i;
};