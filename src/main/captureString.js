function captureString(p) {
  let stringChar = p.str[p.i];
  let isEnd = false;
  let str = p.str;
  let i = p.i;

  p.content += str[i];
  i += 1;

  for (; !isEnd && str[i]; i++) {
    isEnd = ((
      str.substring(i - 3, i) === '\\\\' + stringChar
    ) || (
      str[i] === stringChar
      && str[i - 1] !== '\\'
    ));

    p.content += str[i];
  }

  p.i = i;
}