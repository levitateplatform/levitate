
var levarray = new function() {
	this.mixedarray = [],

	this.init = function (initobj) {
		this.mixedarray = initobj.mixedarray;
	},

	this.returner = function (returnval) {
		return new String(returnval);
	}

	this.strtobytes = function (str) {
	    var utf8 = [];
	    for (var i=0; i < str.length; i++) {
	        var charcode = str.charCodeAt(i);
	        if (charcode < 0x80) utf8.push(charcode);
	        else if (charcode < 0x800) {
	            utf8.push(0xc0 | (charcode >> 6), 
	                      0x80 | (charcode & 0x3f));
	        }
	        else if (charcode < 0xd800 || charcode >= 0xe000) {
	            utf8.push(0xe0 | (charcode >> 12), 
	                      0x80 | ((charcode>>6) & 0x3f), 
	                      0x80 | (charcode & 0x3f));
	        }
	        else {
	            // let's keep things simple and only handle chars up to U+FFFF...
	            utf8.push(0xef, 0xbf, 0xbd); // U+FFFE "replacement character"
	        }
	    }
	    return utf8;
	},

	this.bytes = function (data) {
	  var bytes = [];
	  for (var i = 0; i < data.length; ++i) {
	    if((typeof data[i]) == 'string'){
	    	var list = this.strtobytes(data[i]);
	    	for (var a = 0; a < list.length; ++a){
	    		bytes.push(parseInt(list[a]).toString(16));
	    	}
	    }else if((typeof data[i]) == 'number'){
	    	var elm = data[i]; elm = elm.toString(16);
	    	bytes.push(elm);
	    }
	  }
	  return bytes;
	},

	this.chars = function (data) {
		var chararray = [];
		for (var i = 0; i < data.length ; ++i) {
			if ((typeof data[i]) == 'number'){
				chararray.push(String.fromCharCode(data[i]));
			}
		}
		return chararray;
	},

	this.char_string = function (data) {
		var str = ''; var chararray = this.chars(data);
		for (var i = 0; i < chararray.length ; ++i) {
			str+=chararray[i];
		};
		return str;
	},

	this.pack = function (bytes) {
	    var chars = [];
	    for(var i = 0, n = bytes.length; i < n;) {
	        chars.push(((bytes[i++] & 0xff) << 8) | (bytes[i++] & 0xff));
	    }
	    return String.fromCharCode.apply(null, chars);
	}	

	this.unpack = function (str) {
	    var bytes = [];
	    for(var i = 0, n = str.length; i < n; i++) {
	        var char = str.charCodeAt(i);
	        bytes.push(char >>> 8, char & 0xFF);
	    }
	    return bytes;
	}
};

module.exports = levarray;