# Description

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
  children : []
}]
```