var Sync = require('sync');

var levfloat = new function (){
	this.pack32LE = function (values, encoding) {
		var buf = new Buffer(4, encoding);
		var bytearray = [];
		for(var i = 0; i < values.length;  ++i ) {
		    buf.writeFloatLE(values[i], 0);
		    bytearray.push(buf.toString(encoding, 0));
		    buf = new Buffer(4, encoding);
		};
		return bytearray;
	},

	this.pack32BE = function (values, encoding) {
		var buf = new Buffer(4, encoding);
		var bytearray = [];
		for(var i = 0; i < values.length;  ++i ) {
		    buf.writeFloatBE(values[i], 0);
		    bytearray.push(buf.toString(encoding, 0));
		    buf = new Buffer(4, encoding);
		};
		return bytearray;
	},

	this.pack64LE = function (values, encoding) {
		var buf = new Buffer(8, encoding);
		var bytearray = [];
		for(var i = 0; i < values.length;  ++i ) {
		    buf.writeFloatLE(values[i], 0);
		    bytearray.push(buf.toString(encoding, 0));
		    buf = new Buffer(8, encoding);
		};
		return bytearray;
	},

	this.pack64BE = function (values, encoding) {
		var buf = new Buffer(8, encoding);
		var bytearray = [];
		for(var i = 0; i < values.length;  ++i ) {
		    buf.writeFloatBE(values[i], 0);
		    bytearray.push(buf.toString(encoding, 0));
		    buf = new Buffer(8, encoding);
		};
		return bytearray;
	},

	this.pack128LE = function (values, encoding) {
		var buf = new Buffer(16, encoding);
		var bytearray = [];
		for(var i = 0; i < values.length;  ++i ) {
		    buf.writeFloatLE(values[i], 0);
		    bytearray.push(buf.toString(encoding, 0));
		    buf = new Buffer(16, encoding);
		};
		return bytearray;
	},

	this.pack128BE = function (values, encoding) {
		var buf = new Buffer(16, encoding);
		var bytearray = [];
		for(var i = 0; i < values.length;  ++i ) {
		    buf.writeFloatBE(values[i], 0);
		    bytearray.push(buf.toString(encoding, 0));
		    buf = new Buffer(16, encoding);
		};
		return bytearray;
	}

}

module.exports = levfloat;