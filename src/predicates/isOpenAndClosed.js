function isOpenAndClosed(str, i) {
  return (
    str.substring(i, i + 6) === '<input'
  );
}