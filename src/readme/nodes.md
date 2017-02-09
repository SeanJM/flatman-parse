# Nodes

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