# node-obj-auto-persist

Simple, automatic, file-system object persistence for NodeJS.

This component returns a JS object from a JSON file and watches the object for changes which are then written back to the file. This allows node applications a simple way of persisting data across multiple executions and restarts.

The following app simply echos out how many times it has been run. Modifying the `data` object automatically persists the changes to the file system.

```javascript
var persist = require('obj-auto-persist'),
    data = persist(require('path').resolve('./data.json'));

if (!data.run) {
    data.run = 1;
} else {
    data.run++;
}

console.log('This app has been run ' + data.run + ' times.');
```
