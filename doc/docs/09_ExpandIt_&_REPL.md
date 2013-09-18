## ExpandIt Module and Usage

### ExpandIt
Most of the levitate's enjoyment is you can write you own code modules and on load in repl. You can write code for your own and use or extend levitate by your functions, npm modules, data sources on the fly.
Git repositories can be used for module load and cloning. Basically levitate clones data in your home path under `.levitate` directory
you can use the main code modules as levitates modules and manipulate them combine them over with already existing levitate functions and allover you can use Async and Sync calls over them.

#### extendWith ( projectname, git_uri ) -> ( string (hexdumped as ascii) )
`projectname` is also the dir to be cloned.
`git_uri` is the uri that expander module will be fetched.

* WARNING: git_uri must has `git://` prefix others are not available at this moment. ExpandIt depends heavily on libgit2.

<pre>
<code>
µ.extendWith('little-logger', 'git://github.com/monsur/little-logger.git');

=> 'It will just transfer the files from the big giant universe named internet...'
</code>
</pre>

#### loadModule ( current_levitate_object , projectname ) -> ( string (hexdumped as ascii) )
`current_levitate_object` is just the current levitate object you are using  => `µ`

`projectname` is the dir was cloned OR the dir in `$HOME/.levitate` you already wrote your code
Project name must be passed correctly if you are writing your own code. If you are importing you must give the `projectname` verbatim copy of `projectname` in `extendWith` method.

It will give your new µ back.
<pre>
<code>
µ.loadModule(µ, 'little-logger');

=> µ
</code>
</pre>


General example for ExpandIt usage

<pre>
<code>
µ.extendWith('little-logger', 'git://github.com/monsur/little-logger.git');
setTimeout(function(){
	µ = µ.loadModule(µ, 'little-logger');	
	
	var l = new µ.Logger();
	l.info('The default log level is "info".');

}, 5000);
</code>
</pre>

### REPL

You can use repl from your terminal by typing `levitate repl` or just `levitate` is enough. If you want to fetch some modules you can use `levitate -f` or `levitate fetch`.

