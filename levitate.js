
var levarray = require('./lib/base/levarray')
var levbase64 = require('./lib/base/levbase64')
var levfile = require('./lib/base/levfile')
var levfloat = require('./lib/base/levfloat')
var levregex = require('./lib/base/levregex')
var levhexdump = require('./lib/base/levhexdump')

var levextern = require('./lib/external/levextern')

var sync = require('sync');
var async = require('async');

//============================

var _ = require('underscore');

module.exports = _.extend(
	levarray,
	levbase64,
	levfile,
	levfloat, 
	levregex,
	levhexdump,
	levextern);

module.exports.sync = sync;
module.exports.async = async;