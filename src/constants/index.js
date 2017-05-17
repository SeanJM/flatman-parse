var SPACE = {
  ' ' : true,
  '\t' : true,
  '\n' : true
};

var QUOTE = {
  "'" : true,
  '"' : true
};

var XML_END = {
  "?>" : true
};

var SELF_CLOSING = {
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
  circle : true,
  rect : true,
  path : true,
  polygon : true,
};

var IS_LETTER = {
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