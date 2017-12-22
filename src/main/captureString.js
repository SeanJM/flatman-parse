module.exports = function captureString(p) {
  var stringChar = p.str[p.i];
  var isEnd = false;
  var str = p.str;
  var i = p.i;

  p.content += str[i];
  i += 1;

  for (; !isEnd && str[i]; i++) {
    isEnd = ((
      str.substring(i - 3, i) === "\\\\" + stringChar
    ) || (
        str[i] === stringChar
      && str[i - 1] !== "\\"
      ));

    p.content += str[i];
  }

  p.i = i;
};