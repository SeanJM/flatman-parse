function captureComment(props) {
  var innerComment = '';

  props.index += 4;

  while (props.string.substring(props.index, props.index + 3) !== '-->' && props.string[props.index]) {
    innerComment += props.string[props.index];
    props.index += 1;
  }

  props.index += 3;

  props.nodes.push({
    tagName : 'comment',
    value : innerComment
  });

  resetCapture(props);
}