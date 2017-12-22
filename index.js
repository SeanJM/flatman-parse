module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPACE = {
  " ": true,
  "\t": true,
  "\n": true
};

var GT = {
  ">": true
};

var TAG_HEADER = {
  "h1": true,
  "h2": true,
  "h3": true,
  "h4": true,
  "h5": true,
  "h6": true,
  "H1": true,
  "H2": true,
  "H3": true,
  "H4": true,
  "H5": true,
  "H6": true
};

var QUOTE = {
  "'": true,
  "\"": true
};

var XML_END = {
  "?>": true
};

var SELF_CLOSING = {
  br: true,
  hr: true,

  col: true,
  img: true,
  wbr: true,

  area: true,
  base: true,
  link: true,
  meta: true,

  embed: true,
  input: true,
  param: true,
  track: true,

  keygen: true,
  source: true,

  command: true,

  // SVGs
  circle: true,
  ellipse: true,
  rect: true,
  path: true,
  polygon: true
};

var MAYBE_SELF_CLOSING = {
  // SVGs
  use: true
};

var IS_LETTER = {
  // Lowercase
  "a": true,
  "b": true,
  "c": true,
  "d": true,
  "e": true,
  "f": true,
  "g": true,
  "h": true,
  "i": true,
  "j": true,
  "k": true,
  "l": true,
  "m": true,
  "n": true,
  "o": true,
  "p": true,
  "q": true,
  "r": true,
  "s": true,
  "t": true,
  "u": true,
  "v": true,
  "w": true,
  "x": true,
  "y": true,
  "z": true,
  // Uppercase
  "A": true,
  "B": true,
  "C": true,
  "D": true,
  "E": true,
  "F": true,
  "G": true,
  "H": true,
  "I": true,
  "J": true,
  "K": true,
  "L": true,
  "M": true,
  "N": true,
  "O": true,
  "P": true,
  "Q": true,
  "R": true,
  "S": true,
  "T": true,
  "U": true,
  "V": true,
  "W": true,
  "X": true,
  "Y": true,
  "Z": true
};

module.exports = {
  GT: GT,
  IS_LETTER: IS_LETTER,
  MAYBE_SELF_CLOSING: MAYBE_SELF_CLOSING,
  QUOTE: QUOTE,
  SELF_CLOSING: SELF_CLOSING,
  SPACE: SPACE,
  TAG_HEADER: TAG_HEADER,
  XML_END: XML_END
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function resetCapture(p) {
  p.open = 0;
  p.closed = 0;
  p.anchor = p.i;
  p.content = '';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    IS_LETTER = _require.IS_LETTER,
    TAG_HEADER = _require.TAG_HEADER;

module.exports = function isOpenTag(p) {
  var i = p.i;
  var str = p.str;
  var p1 = str[i + 1];
  var p2 = str[i + 2];

  return str[i] === "<" && (IS_LETTER[p1] && (IS_LETTER[p2] || p2 === " " || p2 === ">") || TAG_HEADER[p1 + p2]) && str.substring(i + 1, i + 10) !== "arguments";
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isClosedTag(p) {
  var i = p.i;
  return p.str[i] + p.str[i + 1] === "</";
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function clearString(p) {
  var stringChar = p.str[p.i];
  var isEnd = false;
  var str = p.str;
  var i = p.i;

  p.content += str[i];
  i += 1;

  for (; !isEnd && str[i]; i++) {
    isEnd = str.substring(i - 3, i) === "\\\\" + stringChar || str[i] === stringChar && str[i - 1] !== "\\";

    p.content += str[i];
  }

  p.i = i;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    IS_LETTER = _require.IS_LETTER;

module.exports = function isStringQuote(p) {
  var str = p.str[p.i];
  var before = p.str[p.i - 1];

  return (str === "'" || str === "\"" || str === "`") && !IS_LETTER[before];
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    SPACE = _require.SPACE;

module.exports = function isLineComment(p) {
  var i = p.i;
  var str = p.str;
  return str[i] + str[i + 1] === "//" && SPACE[str[i - 1]];
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isBlockComment(p) {
  var i = p.i;
  var str = p.str;
  return str[i] + str[i + 1] === "/*";
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isRegExp(p) {
  var p1 = p.str[p.i];
  var i = p.i;
  var str = p.str;

  return p1 === '/' && (str[i - 1] === '(' || str[i - 1] === '=' || str[i - 1] === ' ' && str[i - 2] === '=');
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function clearLineComment(p) {
  var i = p.i;
  var str = p.str;

  p.content += str[i] + str[i + 1];
  i += 2;

  while (str[i] !== "\n" && str[i]) {
    p.content += str[i];
    i += 1;
  }

  p.i = i;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOpenTag = __webpack_require__(2);
var isClosedTag = __webpack_require__(3);

module.exports = function clearBlockComment(p) {
  var isEnd = false;
  var init = p.i;
  var i = p.i;
  var str = p.str;

  p.content += str[i];
  i += 1;

  for (; !isEnd && str[i]; i++) {
    isEnd = str[i - 1] + str[i] === "*/";
    p.content += str[i];
  }

  if (!isEnd) {
    while (!isOpenTag(p) && !isClosedTag(p) && i > init) {
      p.content = str.substring(init, i);
      i -= 1;
    }
  }

  p.i = i;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function clearRegExp(p) {
  var isEnd = false;
  var str = p.str;
  var i = p.i;

  p.content += str[i];
  i += 1;

  for (; !isEnd && str[i]; i++) {
    isEnd = str[i] === "/" && str[i - 1] !== "\\";
    p.content += str[i];
  }

  p.i = i;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseHtml = __webpack_require__(13);
module.exports = parseHtml;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    SPACE = _require.SPACE,
    SELF_CLOSING = _require.SELF_CLOSING,
    MAYBE_SELF_CLOSING = _require.MAYBE_SELF_CLOSING;

var isOpenTag = __webpack_require__(2);
var isText = __webpack_require__(14);
var isComment = __webpack_require__(15);
var isDocType = __webpack_require__(16);
var isXmlDeclaration = __webpack_require__(17);

var captureComment = __webpack_require__(18);
var captureDocType = __webpack_require__(19);
var captureText = __webpack_require__(20);
var captureXmlDeclaration = __webpack_require__(21);
var clearBlockComment = __webpack_require__(10);
var clearComment = __webpack_require__(22);
var clearLineComment = __webpack_require__(9);
var clearRegExp = __webpack_require__(11);
var clearString = __webpack_require__(4);
var getNode = __webpack_require__(23);
var resetCapture = __webpack_require__(1);

var isBlockComment = __webpack_require__(7);
var isMaybeSelfClosingTag = __webpack_require__(32);
var isClosedTag = __webpack_require__(3);
var isOpenComment = __webpack_require__(28);
var isLineComment = __webpack_require__(6);
var isRegExp = __webpack_require__(8);
var isSelfClosingTag = __webpack_require__(29);
var isStringQuote = __webpack_require__(5);

function captureNode(p) {
  var hasSlash = false;
  var capture = true;
  var innerTag = "";
  var node;

  // Get inner tag
  p.open += 1;
  p.i += 1;

  while (p.str[p.i] !== ">" && p.str[p.i]) {
    innerTag += p.str[p.i];
    p.i += 1;
  }

  if (innerTag[innerTag.length - 1] === "/") {
    innerTag = innerTag.substring(0, innerTag.length - 1);
    hasSlash = true;
  }

  p.i += 1;
  node = getNode(innerTag);
  innerTag = "";

  if (hasSlash && SELF_CLOSING[node.tagName] || SELF_CLOSING[node.tagName] || MAYBE_SELF_CLOSING[node.tagName]) {
    capture = false;
    p.nodes.push(node);
    resetCapture(p);
    p.i -= 1;
  } else if (hasSlash) {
    throw new Error("Tag: '" + node.tagName + "' is not a self closing tag.");
  }

  while (p.i < p.length && capture) {
    if (isStringQuote(p)) {
      clearString(p);
    }

    if (isLineComment(p)) {
      clearLineComment(p);
    }

    if (isBlockComment(p)) {
      clearBlockComment(p);
    }

    if (isRegExp(p)) {
      clearRegExp(p);
    }

    if (isOpenComment(p)) {
      clearComment(p);
    }

    if (isMaybeSelfClosingTag(p)) {
      p.open += 1;
      p.closed += 1;
    } else if (isSelfClosingTag(p)) {
      p.open += 1;
      p.closed += 1;
    } else if (isOpenTag(p)) {
      p.open += 1;
    }if (isClosedTag(p)) {
      p.closed += 1;
    }

    if (p.open - p.closed === 0) {
      node.childNodes = parseHtml(p.content);
      p.nodes.push(node);

      // Go to the end of the closed tag
      p.i = p.str.indexOf(">", p.i);
      p.i -= 1;
      resetCapture(p);
      capture = false;
    }

    if (p.open > p.closed) {
      p.content += p.str[p.i];
    }

    p.i += 1;
  }
}

function parseHtml(str) {
  var p = {
    content: "",
    str: str,
    i: 0,
    anchor: 0,
    open: 0,
    closed: 0,
    length: str.length,
    nodes: []
  };

  for (; p.i < p.length; p.i++) {
    if (!SPACE[p.str[p.i]]) {
      if (isOpenTag(p)) {
        captureNode(p);
      } else if (isText(p)) {
        captureText(p);
      } else if (isComment(p)) {
        captureComment(p);
      } else if (isDocType(p)) {
        captureDocType(p);
      } else if (isXmlDeclaration(p)) {
        captureXmlDeclaration(p);
      }
    }
  }

  return p.nodes;
}

module.exports = parseHtml;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isText(p) {
  return p.str[p.i] !== '<';
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isComment(p) {
  var i = p.i;
  var s = p.str.substring(i, i + 4);
  return s === '<!--';
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isDocType(p) {
  var i = p.i;
  var s = p.str.substring(i, i + 9).toLowerCase();
  return s === '<!doctype';
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isXmlDeclaration(p) {
  var i = p.i;

  var s = p.str.substring(i, i + 6).toLowerCase();

  return s === '<?xml ';
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resetCapture = __webpack_require__(1);

module.exports = function captureComment(p) {
  var childNodes = "";

  p.i += 4;

  while (p.str.substring(p.i, p.i + 3) !== "-->" && p.str[p.i]) {
    childNodes += p.str[p.i];
    p.i += 1;
  }

  p.i += 3;

  p.nodes.push({
    tagName: "comment",
    childNodes: childNodes.split("\n")
  });

  resetCapture(p);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    SPACE = _require.SPACE;

var resetCapture = __webpack_require__(1);

module.exports = function captureDocType(p) {
  var str = p.str;
  var i = p.i;

  var rootElement = "";
  var type = "";
  var publicIdentifier = "";
  var privateIdentifier = "";
  var stringChar;

  i += 10; // Offset doctype

  while (!SPACE[str[i]] && str[i] !== ">" && str[i]) {
    rootElement += str[i];
    i += 1;
  }

  while (SPACE[str[i]] && str[i]) {
    i += 1;
  }

  while (!SPACE[str[i]] && str[i] !== ">" && str[i]) {
    type += str[i];
    i += 1;
  }

  if (str[i] !== ">") {
    while (str[i] !== "'" && str[i] !== "\"" && str[i]) {
      i += 1;
    }

    stringChar = str[i];
    i += 1;

    while (str[i] !== stringChar && str[i]) {
      publicIdentifier += str[i];
      i += 1;
    }
    i += 1;

    while (str[i] !== "'" && str[i] !== "\"" && str[i]) {
      i += 1;
    }

    stringChar = str[i];
    i += 1;

    while (str[i] !== stringChar && str[i]) {
      privateIdentifier += str[i];
      i += 1;
    }

    while (str[i] !== ">" && str[i]) {
      i += 1;
    }
  }

  p.i = i;
  p.nodes.push({
    tagName: "doctype",
    rootElement: rootElement,
    type: type.length ? type.toLowerCase() : undefined,
    publicIdentifier: publicIdentifier.length ? publicIdentifier : undefined,
    privateIdentifier: privateIdentifier.length ? privateIdentifier : undefined
  });

  resetCapture(p);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isStringQuote = __webpack_require__(5);
var isLineComment = __webpack_require__(6);
var isBlockComment = __webpack_require__(7);
var isRegExp = __webpack_require__(8);
var isOpenTag = __webpack_require__(2);
var isClosedTag = __webpack_require__(3);

var clearString = __webpack_require__(4);
var clearLineComment = __webpack_require__(9);
var clearBlockComment = __webpack_require__(10);
var clearRegExp = __webpack_require__(11);

var resetCapture = __webpack_require__(1);

module.exports = function captureText(p) {
  var capture = true;
  var temp;

  while (p.i < p.length && capture) {
    if (isStringQuote(p)) {
      clearString(p);
    }

    if (isLineComment(p)) {
      clearLineComment(p);
    }

    if (isBlockComment(p)) {
      clearBlockComment(p);
    }

    if (isRegExp(p)) {
      clearRegExp(p);
    }

    if (isOpenTag(p) || isClosedTag(p)) {
      capture = false;
    } else {
      p.i += 1;
    }
  }

  p.i -= 1;

  temp = p.str.substring(p.anchor, p.i + 1);

  if (temp.trim()) {
    p.nodes.push(temp);
  }

  resetCapture(p);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    XML_END = _require.XML_END,
    SPACE = _require.SPACE,
    QUOTE = _require.QUOTE;

var resetCapture = __webpack_require__(1);

module.exports = function captureXmlDeclaration(p) {
  var node = {
    tagName: "xml",
    attributes: {}
  };

  var attr = "";
  var temp = [];
  var str = p.str;
  var i = p.i;

  i += 6; // Offset

  while (!XML_END[str[i - 1] + str[i]] && str[i]) {
    attr += str[i];
    i += 1;

    if (SPACE[str[i]] || XML_END[str[i - 1] + str[i]]) {
      temp = attr.split("=");

      while (!QUOTE[temp[1][0]]) {
        temp[1] = temp[1].substring(1);
      }

      while (!QUOTE[temp[1][temp[1].length - 1]]) {
        temp[1] = temp[1].substring(0, temp[1].length - 1);
      }

      temp[1] = temp[1].substring(1, temp[1].length - 1);
      node.attributes[temp[0]] = temp[1];
      attr = "";
    }

    while (SPACE[str[i]] && str[i]) {
      i += 1;
    }
  }

  p.i = i;
  p.nodes.push(node);
  resetCapture(p);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function clearComment(p) {
  while (p.str.substring(p.i, p.i + 3) !== "-->" && p.str[p.i]) {
    p.content += p.str[p.i];
    p.i += 1;
  }
  while (p.str[p.i] !== ">") {
    p.content += p.str[p.i];
    p.i += 1;
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    SPACE = _require.SPACE,
    QUOTE = _require.QUOTE;

var filterAttributeName = __webpack_require__(24);
var filterAttributeValue = __webpack_require__(25);

module.exports = function getNode(str) {
  var stringChar;

  var i = 0;
  var n = str.length;

  var node = {
    tagName: "",
    attributes: {},
    childNodes: []
  };

  var attr = {
    name: "",
    value: ""
  };

  while (!SPACE[str[i]] && str[i]) {
    node.tagName += str[i];
    i += 1;
  }

  node.tagName = node.tagName.toLowerCase();

  for (; i < n; i++) {
    while (SPACE[str[i]] && str[i]) {
      i += 1;
    }

    while (str[i] !== "=" && str[i]) {
      attr.name += str[i];
      i += 1;
    }

    if (str[i] === "=") {
      while (!QUOTE[str[i]] && str[i]) {
        i += 1;
      }

      stringChar = str[i];
      i += 1;

      while (str[i] !== stringChar && str[i]) {
        attr.value += str[i];
        i += 1;
      }

      i += 1;

      node.attributes[filterAttributeName(attr.name)] = filterAttributeValue(attr.name, attr.value);

      attr.name = "";
      attr.value = "";
    }
  }

  return node;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function filterAttributeName(name) {
  return name === "class" ? "className" : name;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var filterAttributeStyle = __webpack_require__(26);

module.exports = function filterAttributeValue(name, value) {
  if (name === "style") {
    return filterAttributeStyle(value);
  }

  return value;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camelCase = __webpack_require__(27);

module.exports = function filterAttributeStyle(style) {
  var obj = {};
  var each = style.split(";");
  var styleTemp;

  for (var i = 0, n = each.length; i < n; i++) {
    if (each[i].length) {
      styleTemp = each[i].split(":");
      obj[camelCase(styleTemp[0].trim())] = styleTemp.slice(1, n).join(":").trim();
    }
  }

  return obj;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function camelCase(str) {
  var split = str.split("-");
  for (var i = 0, n = split.length; i < n; i++) {
    if (i === 0) {
      split[i] = split[i].toLowerCase();
    } else {
      split[i] = split[i][0].toUpperCase() + split[i].slice(1).toLowerCase();
    }
  }

  return split.join("");
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isOpenComment(p) {
  return p.str.substring(p.i, p.i + 4) === "<!--";
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    SELF_CLOSING = _require.SELF_CLOSING,
    SPACE = _require.SPACE,
    GT = _require.GT;

module.exports = function isSelfClosingTag(p) {
  var i = p.i;
  var str = p.str.substring(i + 1, i + 9).toLowerCase();

  return SELF_CLOSING[str.substring(0, 2)] && (GT[str[2]] || SPACE[str[2]]) || SELF_CLOSING[str.substring(0, 3)] && (GT[str[3]] || SPACE[str[3]]) || SELF_CLOSING[str.substring(0, 4)] && (GT[str[4]] || SPACE[str[4]]) || SELF_CLOSING[str.substring(0, 5)] && (GT[str[5]] || SPACE[str[5]]) || SELF_CLOSING[str.substring(0, 6)] && (GT[str[6]] || SPACE[str[6]]) || SELF_CLOSING[str.substring(0, 7)] && (GT[str[7]] || SPACE[str[7]]) || SELF_CLOSING[str] && (GT[str[2]] || SPACE[str[2]]);
};

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    MAYBE_SELF_CLOSING = _require.MAYBE_SELF_CLOSING,
    IS_LETTER = _require.IS_LETTER,
    SPACE = _require.SPACE;

module.exports = function isMaybeSelfClosingTag(p) {
  var str = p.str;
  var i = p.i;
  var isOpen = str[i] === "<" && IS_LETTER[str[i + 1]];
  var tagName = "";

  if (isOpen) {
    i += 1;

    while (!SPACE[str[i]] && str[i]) {
      tagName += str[i];
      i += 1;
    }

    if (MAYBE_SELF_CLOSING[tagName.toLowerCase()]) {
      while (str[i] !== ">" && str[i]) {
        i += 1;
      }
      return str.substring(i - 1, i) !== "/>";
    }
  }

  return false;
};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map