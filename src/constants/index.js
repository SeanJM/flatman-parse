const SPACE = {
  ' ' : true,
  '\t' : true,
  '\n' : true
};

const GT = {
  '>' : true
};

const TAG_HEADER = {
  'h1' : true,
  'h2' : true,
  'h3' : true,
  'h4' : true,
  'h5' : true,
  'h6' : true,
  'H1' : true,
  'H2' : true,
  'H3' : true,
  'H4' : true,
  'H5' : true,
  'H6' : true,
}

const QUOTE = {
  "'" : true,
  '"' : true
};

const XML_END = {
  "?>" : true
};

const SELF_CLOSING = {
  br : true,
  hr : true,

  col : true,
  img : true,
  wbr : true,

  area : true,
  base : true,
  link : true,
  meta : true,

  embed : true,
  input : true,
  param : true,
  param : true,
  track : true,

  keygen : true,
  source : true,

  command : true,

  // SVGs
  circle  : true,
  ellipse : true,
  rect    : true,
  path    : true,
  polygon : true,
};

const IS_LETTER = {
  // Lowercase
  'a' : true,
  'b' : true,
  'c' : true,
  'd' : true,
  'e' : true,
  'f' : true,
  'g' : true,
  'h' : true,
  'i' : true,
  'j' : true,
  'k' : true,
  'l' : true,
  'm' : true,
  'n' : true,
  'o' : true,
  'p' : true,
  'q' : true,
  'r' : true,
  's' : true,
  't' : true,
  'u' : true,
  'v' : true,
  'w' : true,
  'x' : true,
  'y' : true,
  'z' : true,
  // Uppercase
  'A' : true,
  'B' : true,
  'C' : true,
  'D' : true,
  'E' : true,
  'F' : true,
  'G' : true,
  'H' : true,
  'I' : true,
  'J' : true,
  'K' : true,
  'L' : true,
  'M' : true,
  'N' : true,
  'O' : true,
  'P' : true,
  'Q' : true,
  'R' : true,
  'S' : true,
  'T' : true,
  'U' : true,
  'V' : true,
  'W' : true,
  'X' : true,
  'Y' : true,
  'Z' : true,
};

module.exports = {
  SPACE,
  GT,
  TAG_HEADER,
  QUOTE,
  XML_END,
  SELF_CLOSING,
  IS_LETTER,
};