# Flatman Parse 1.1.0
#### License: [MIT](https://opensource.org/licenses/MIT)

#### ✅ [All 36 tests pass](#tests)
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
  version : String,
  encoding : String,
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
  19. div.test > [string]................................................ ✅
  20. div.test > [string] + div.sibling.................................. ✅
  21. script............................................................. ✅
  22. script (jquery).................................................... ✅
  23. nested script (jquery)............................................. ✅
  24. <input/>........................................................... ✅
  25. <div/> (error)..................................................... ✅
  26. div................................................................ ✅
  27. style (bootstrap).................................................. ✅
  28. style nested (bootstrap)........................................... ✅
  29. svg (groups)....................................................... ✅
  30. <div> + <div>...................................................... ✅
  31. xml declaration.................................................... ✅
  32. input (optional slash)............................................. ✅
  33. No spaces.......................................................... ✅
  34. style attribute.................................................... ✅
  35. svg (acid test).................................................... ✅
  36. svg (g tag)........................................................ ✅
```
