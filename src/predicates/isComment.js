function isComment(props) {
  return props.string.substring(props.index, props.index + 4) === '<!--';
}