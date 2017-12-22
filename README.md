# Flatman Parse 1.2.10
#### License: [MIT](https://opensource.org/licenses/MIT)

#### ✅ [All 45 tests pass](#tests)
##  Description


## An HTML parser
Takes your raw HTML and returns a JavaScript array with a structure similar to this:

```html
<div class="titlebar"></div>
```

```javascript
[{
  tagName : 'div',
  attributes : {
    className : 'titlebar'
  },
  childNodes : []
}]
```
##  Installation


### NPM
```bash
npm i -S flatman-parse
```

```javascript
const parseHtml = require('flatman-parse');
```

### Download the `flatman-parse.js` and use on the client
```html
<script src="flatman-parse.js"></script>
```
##  Nodes


- Regular Node
- DocType
- Comment

### Regular Node
```javascript
{
  tagName : 'div',
  attributes : {},
  childNodes : []
}
```

### DocType
```javascript
{
  tagName : 'doctype',
  rootElement : String,
  type : 'public'|'private',
  publicIdentifier : String,
  privateIdentifier : String
}
```

### XML Declaration
```javascript
{
  tagName : 'xml',
  attributes : {
    version : String,
    encoding : String,
  }
}
```

### Comment
```javascript
{
  tagName : 'comment',
  value : value: String
}
```
##  Style attribute


```html
<div style="float: left; margin-left: auto"></div>
```

```javascript
  {
    tagName : 'div',
    attributes : {
      style  : {
        float : 'left',
        marginLeft : 'auto'
      }
    }
  }
```

##  Usage


### On the server
```javascript
const parseHtml = require('flatman-parse');
const result = parseHtml('<div class="my-div"></div>');
```

### On the client
```javascript
var result = parseHtml('<div class="my-div"></div>');
```

***

## Tests

```
   Loading tests (45)

  1. The Acid Test ................................................... PASSED
  2. Basic scaffold .................................................. PASSED
  3. Comment ......................................................... PASSED
  4. div.test ........................................................ PASSED
  5. Doc type ........................................................ PASSED
  6. Doc type HTML4 .................................................. PASSED
  7. Doc type ........................................................ PASSED
  8. h1 .............................................................. PASSED
  9. h4, p, hr, h6, ul, li ........................................... PASSED
  10. hr .............................................................. PASSED
  11. input ........................................................... PASSED
  12. div > input ..................................................... PASSED
  13. div > input + div ............................................... PASSED
  14. div > input + [string] .......................................... PASSED
  15. link ............................................................ PASSED
  16. meta ............................................................ PASSED
  17. attributes (multiline) .......................................... PASSED
  18. comment (multiline) ............................................. PASSED
  19. (div > div + div) * 2 ........................................... PASSED
  20. div > div ....................................................... PASSED
  21. h6 + p .......................................................... PASSED
  22. div.test > [string] ............................................. PASSED
  23. div.test > [string] + div.sibling ............................... PASSED
  24. script .......................................................... PASSED
  25. script (jquery) ................................................. PASSED
  26. nested script (jquery) .......................................... PASSED
  27. <input/> ........................................................ PASSED
  28. <div/> (error) .................................................. PASSED
  29. div ............................................................. PASSED
  30. style (bootstrap) ............................................... PASSED
  31. style nested (bootstrap) ........................................ PASSED
  32. svg (groups) .................................................... PASSED
  33. svg (polygon) ................................................... PASSED
  34. <div> + <div> ................................................... PASSED
  35. ul .............................................................. PASSED
  36. xml declaration ................................................. PASSED
  37. Custom tags ..................................................... PASSED
  38. DocType parse ................................................... PASSED
  39. input (optional slash) .......................................... PASSED
  40. No spaces ....................................................... PASSED
  41. style attribute ................................................. PASSED
  42. svg (acid test) ................................................. PASSED
  43. svg (g tag) ..................................................... PASSED
  44. React public HTML ............................................... PASSED
  45. svg (use maybe closed) .......................................... PASSED

  + 45 test passed
  Completed in ..................................................... 3.71s
```
