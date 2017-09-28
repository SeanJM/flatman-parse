# Flatman Parse 1.2.6
#### License: [MIT](https://opensource.org/licenses/MIT)

#### ✅ [All 42 tests pass](#tests)
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
   1. The Acid Test...................................................... ✅
   2. Basic scaffold..................................................... ✅
   3. Comment............................................................ ✅
   4. div.test........................................................... ✅
   5. Doc type........................................................... ✅
   6. Doc type HTML4..................................................... ✅
   7. Doc type........................................................... ✅
   8. h1................................................................. ✅
   9. hr................................................................. ✅
  10. input.............................................................. ✅
  11. div > input........................................................ ✅
  12. div > input + div.................................................. ✅
  13. div > input + [string]............................................. ✅
  14. link............................................................... ✅
  15. meta............................................................... ✅
  16. attributes (multiline)............................................. ✅
  17. comment (multiline)................................................ ✅
  18. (div > div + div) * 2.............................................. ✅
  19. div > div.......................................................... ✅
  20. h6 + p............................................................. ✅
  21. div.test > [string]................................................ ✅
  22. div.test > [string] + div.sibling.................................. ✅
  23. script............................................................. ✅
  24. script (jquery).................................................... ✅
  25. nested script (jquery)............................................. ✅
  26. <input/>........................................................... ✅
  27. <div/> (error)..................................................... ✅
  28. div................................................................ ✅
  29. style (bootstrap).................................................. ✅
  30. style nested (bootstrap)........................................... ✅
  31. svg (groups)....................................................... ✅
  32. svg (polygon)...................................................... ✅
  33. <div> + <div>...................................................... ✅
  34. ul................................................................. ✅
  35. xml declaration.................................................... ✅
  36. Custom tags........................................................ ✅
  37. DocType parse...................................................... ✅
  38. input (optional slash)............................................. ✅
  39. No spaces.......................................................... ✅
  40. style attribute.................................................... ✅
  41. svg (acid test).................................................... ✅
  42. svg (g tag)........................................................ ✅
```
