var pth = require('path'),
	lazy = require("lazy"),
    fs = require("fs"),
    crypto = require('crypto'),
    hash_file = require('hash_file'),
    w = require('winston');

var levfile = new function () {
	this.hashes = '',
	
	this.each_line = function (filename, callback) {
		try{
		 new lazy(fs.createReadStream(filename))
		     .lines
		     .forEach(function(line){
		     	callback(line);
		     }
		 );
		}catch(err){
			w.log('ERROR', "Couldn't read the file: "+err.message);
		}
	},

	this.each_row = function (filename, seperator, callback){
		try{
			var content = fs.readFileSync(filename);
			var rows=str.split(seperator);
			for (var i = 0; i < rows.length; ++i) {
				callback(rows[i].toString());
			};
		}catch(err){
			w.log('ERROR', "Couldn't read the file: "+err.message);
		}
	},

	this.escape_path = function (path) {
		//TO-DO: Need improvement
		path = path.toString();
  		path.replace("\0",'');
  		path.replace('~',"\\~");
  		path = '/'+path;
  		path=pth.normalize(path);
  		return path;
	},

	this.md5 = function(filename){
		var content = fs.readFileSync(filename);
		return crypto.createHash('md5').update(content).digest('hex');
	},

	this.sha1 = function(filename){
		var content = fs.readFileSync(filename);
		return crypto.createHash('sha1').update(content).digest('hex');
	},

	this.sha128 = function(filename){
		var content = fs.readFileSync(filename);
		return crypto.createHash('sha1').update(content).digest('hex');
	},

	this.sha2 = function(filename) {
		var content = fs.readFileSync(filename);
		return crypto.createHash('sha256').update(content).digest('hex');
	},

	this.sha256 = function(filename) {
		var content = fs.readFileSync(filename);
		return crypto.createHash('sha256').update(content).digest('hex');
	},

	this.sha5 = function(filename) {
		var content = fs.readFileSync(filename);
		return crypto.createHash('sha512').update(content).digest('hex');
	},

	this.sha512 = function(filename) {
		var content = fs.readFileSync(filename);
		return crypto.createHash('sha512').update(content).digest('hex');
	}
}

module.exports = levfile