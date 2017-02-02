function parse(string) {
  var props = {
    content : '',
    string : string,
    index : 0,
    anchor : 0,
    open : 0,
    closed : 0,
    length : string.length,
    nodes : []
  };


  for (; props.index < props.length; props.index++) {
    if (!isSpace(props.string[props.index])) {
      if (isOpenTag(props)) {
        captureNode(props);
      } else if (isText(props)) {
        captureText(props);
      } else if (isComment(props)) {
        captureComment(props);
      } else if (isDocType(props)) {
        captureDocType(props);
      }
    }
  }

  return props.nodes;
}