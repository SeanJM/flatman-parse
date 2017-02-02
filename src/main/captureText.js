function captureText(props) {
  var temp;

  while (props.string[props.index] !== '<' && props.index < props.length) {
    props.index += 1;
  }

  props.index -= 1;

  temp = props.string.substring(
    props.anchor,
    props.index + 1
  );

  if (temp.trim()) {
    props.nodes.push(temp);
  }

  reset(props);
}