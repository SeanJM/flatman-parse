function isOpenAndClosed(props) {
  var s = props.string
    .substring(props.index + 1, props.index + 6)
    .toLowerCase();
  return SELF_CLOSING[s];
}