# Nodes

- Regular Node
- DocType
- Comment

### Regular Node
```javascript
{
  tagName : 'div',
  attributes : {},
  children : []
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