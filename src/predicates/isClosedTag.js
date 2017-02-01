function isClosedTag(str, i) {
  return (
    str[i] === '<' &&
    str[i + 1] === '/'
  );
}