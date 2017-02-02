function isDocType(props) {
  var s = props.string
    .substring(props.index, props.index + 9)
    .toLowerCase();
  return s === '<!doctype';
}