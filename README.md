# Flatman Parse 1.0.3
#### License: [MIT](https://opensource.org/licenses/MIT)

#### ✅ [All 32 tests pass](#tests)
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
  rootElement : string,
  type : 'public'|'private',
  publicIdentifier : string,
  privateIdentifier : string
}
```

### Comment
```javascript
{
  tagName : 'comment',
  value : value: string
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
   7. hr................................................................. ✅
   8. input.............................................................. ✅
   9. div > input........................................................ ✅
  10. div > input + div.................................................. ✅
  11. div > input + [string]............................................. ✅
  12. link............................................................... ✅
  13. meta............................................................... ✅
  14. attributes (multiline)............................................. ✅
  15. comment (multiline)................................................ ✅
  16. (div > div + div) * 2.............................................. ✅
  17. div > div.......................................................... ✅
  18. div.test > [string]................................................ ✅
  19. div.test > [string] + div.sibling.................................. ✅
  20. script............................................................. ✅
  21. script (jquery).................................................... ✅
  22. nested script (jquery)............................................. ✅
  23. <input/>........................................................... ✅
  24. <div/> (error)..................................................... ✅
  25. div................................................................ ✅
  26. style (bootstrap).................................................. ✅
  27. style nested (bootstrap)........................................... ✅
  28. svg (groups)....................................................... ✅
  29. <div> + <div>...................................................... ✅
  30. input (optional slash)............................................. ✅
  31. No spaces.......................................................... ✅
  32. svg (g tag)........................................................ ✅
```
