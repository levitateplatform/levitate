// Import other extra libraries in it.

//Export downloader
var fs = require('fs'),
    celeri = require('celeri'),
    clc = require('cli-color');

var _ = require('underscore'),
	gitteh = require("gitteh"),
	Sync = require('sync');

var rate = 0,
	doner = 0;

function progBar(){
	var interval = setInterval(function()
	{
	    if(doner == 0){ clearInterval(interval); return;}
	}, 1);
}

function checkHomeDir(){
	function getUserHome() {
  		return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
	};
	if(getUserHome().length > 0){
		if(!fs.existsSync(getUserHome()+'/.levitate')){
			fs.mkdirSync(getUserHome()+'/.levitate')
		}
	}else{
		if(!fs.existsSync('~/.levitate')){
			fs.mkdirSync('~/.levitate')
		}
	}
}

var levextern = new function(){

	this.extendWith = function (projname, repopath) {
		Sync(function  () {
			checkHomeDir();
			
		if(fs.existsSync((process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']+'/.levitate/'+projname)) == false) {
			progBar();
			console.log("Cloning " + repopath + " into " + process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']+
				'/.levitate/'+projname);
			var clone = gitteh.clone(repopath, process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']+
				'/.levitate/'+projname);

			clone.on("status", function(bytes, total, done) {

				if(done > 0) {
					doner = 1;
					rate = (done/total)*100;
					celeri.progress("Transferred " + bytes + " bytes ", rate);
				}else{
					doner = 0;
				}
			});

			clone.on("complete", function(repo) {
				var spinner = celeri.loading(clc.blue('Transfer Completed: '));
				setTimeout(function()
				{
				    spinner.done(undefined);//undefined = done, true = success, false = fail
				}, 1);
				//console.log(repo);
				rate = 0;
			});

			clone.on("error", function(err) {
				var spinner = celeri.loading(clc.red('Error during cloning: '));
				setTimeout(function()
				{
				    spinner.done(false);//undefined = done, true = success, false = fail
				}, 1);
				console.err(clc.red(err));
			});
		}else{
			var spinner = celeri.loading(clc.red('Module already exist: '));
			setTimeout(function()
			{
			    spinner.done(false);//undefined = done, true = success, false = fail
			}, 1);
		}

		});
	},

	this.loadModule = function (currobj, projname) {
		var rpath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']+'/.levitate/'+projname;
		var pack = require(rpath+'/package.json');
		if(pack.main == undefined){
			var spinner = celeri.loading('Main description couldn\'t found in package.json: ');
			setTimeout(function()
			{
			    spinner.done(false);//undefined = done, true = success, false = fail
			}, 1);
		}else{
			var lmodule = require(rpath+'/'+pack.main);
			return _.extend(currobj,lmodule);
		}
	}

}

module.exports = levextern;