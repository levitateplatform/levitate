var crypto = require('crypto');
var levarray = require('./levarray');
var URLSafeBase64 = require('urlsafe-base64');

var levbase64 = new function () {
	this.strict_decode64 = function (argument) {
		return levarray.char_string(new Buffer(argument, 'base64'));
	},

	this.strict_encode64 = function (argument) {
		return new Buffer(argument).toString('base64');
	},

	this.urlsafe_decode64 = function (argument) {
		return levarray.char_string(URLSafeBase64.decode(argument));
	},

	this.urlsafe_encode64 = function (argument) {
		return URLSafeBase64.encode(new Buffer(argument));
	}
}

module.exports = levbase64