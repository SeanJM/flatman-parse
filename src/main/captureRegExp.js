function captureRegExp(p) {
  let isEnd = false;
  let str = p.str;
  let i = p.i;

  p.content += str[i];
  i += 1;

  for (; !isEnd && str[i]; i++) {
    isEnd = str[i] === '/' && str[i - 1] !== '\\';
    p.content += str[i];
  }

  p.i = i;
}