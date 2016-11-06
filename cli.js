#!/usr/bin/env node
"use strict";
var pkg = require("./package.json");
var animequote = require("./index");

if (process.argv.indexOf("-v") !== -1 || process.argv.indexOf("--version") !== -1) {
	console.log(pkg.version);
	return;
}
else {
	console.log(animequote().quotesentence + " --" + animequote().quotecharacter + " from " + animequote().quoteanime);
}
