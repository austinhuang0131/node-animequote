'use strict';
var assert = require('assert');
var animequote = require('./index');


it('should get return at least one quote', function (cb) {
		assert(animequote);
		cb();
});
