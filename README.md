# node-animequote
Anime Quote Generator. In node.js. Made from [node-yoda-said](https://github.com/hemanth/node-yoda-said). Resources from [anime-quote-generator](https://github.com/jiashengc/anime-quote-generator).

## How to use it?
Basically you install first...
```
$ npm install --save animequote
```
Then you require it...
```js
var aq = require('animequote');
console.log(aq().quotesentence + " --" + aq().quotecharacter + " from " + aq().quoteanime);
```

### In CLI?
```shell
$ npm install --global animequote
```
Then...
```
$ animequote
```
