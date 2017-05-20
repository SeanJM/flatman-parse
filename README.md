# Flatman Parse 1.2.1
#### License: [MIT](https://opensource.org/licenses/MIT)

#### ✅ [All 37 tests pass](#tests)
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
   7. h1................................................................. ✅
   8. hr................................................................. ✅
   9. input.............................................................. ✅
  10. div > input........................................................ ✅
  11. div > input + div.................................................. ✅
  12. div > input + [string]............................................. ✅
  13. link............................................................... ✅
  14. meta............................................................... ✅
  15. attributes (multiline)............................................. ✅
  16. comment (multiline)................................................ ✅
  17. (div > div + div) * 2.............................................. ✅
  18. div > div.......................................................... ✅
  19. h6 + p............................................................. ✅
  20. div.test > [string]................................................ ✅
  21. div.test > [string] + div.sibling.................................. ✅
  22. script............................................................. ✅
  23. script (jquery).................................................... ✅
  24. nested script (jquery)............................................. ✅
  25. <input/>........................................................... ✅
  26. <div/> (error)..................................................... ✅
  27. div................................................................ ✅
  28. style (bootstrap).................................................. ✅
  29. style nested (bootstrap)........................................... ✅
  30. svg (groups)....................................................... ✅
  31. <div> + <div>...................................................... ✅
  32. xml declaration.................................................... ✅
  33. input (optional slash)............................................. ✅
  34. No spaces.......................................................... ✅
  35. style attribute.................................................... ✅
  36. svg (acid test).................................................... ✅
  37. svg (g tag)........................................................ ✅
```
