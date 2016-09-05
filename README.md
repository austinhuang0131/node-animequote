# node-animequote
![npm downloads](https://img.shields.io/npm/dm/animequote.svg?maxAge=2592000) ![npm version](https://img.shields.io/npm/v/animequote.svg?maxAge=2592000)

[![NPM](https://nodei.co/npm/animequote.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/animequote/)

Anime Quote Generator. In node.js. Made from [node-yoda-said](https://github.com/hemanth/node-yoda-said). Resources from [anime-quote-generator](https://github.com/jiashengc/anime-quote-generator).

Before installing, you want to make sure it works, eh? [This Tonic notebook](https://tonicdev.com/austinhuang0131/57ca2dc029fbd114001d32df) will ensure it works.

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

### In console?
```shell
$ npm install --global animequote
```
Then...
```
$ animequote
```

## Credit
* [node-yoda-said](https://github.com/hemanth/node-yoda-said), Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com).
* [anime-quote-generator](https://github.com/jiashengc/anime-quote-generator), Copyright (c) 2015 Chong Jia Sheng.
* Both in MIT

## Contact
[![Discord](https://img.shields.io/badge/Discord-Caf%C3%A9%200131%2B-7289DA.svg)](http://discord.me/0131)
