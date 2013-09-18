## Calls

There are 2 modules already loaded inside in levitate

* Async module for using async models (like parallel)

and

* Sync module for chained flow in programs

You can reach to Async module like this
<pre>
<code>
var iterator = µ.async.iterator([
    function(){ console.log('one'); },
    function(){ console.log('two'); },
    function(){ console.log('three'); }
]);

var iterator2 = iterator();
var iterator3 = iterator2();
console.log(iterator2 + '$$' + iterator3);
</code>
</pre>

for sync module
<pre>
<code>
µ.sync(function(){
	console.log('SYNC');
});
</code>
</pre>

Sync uses fiber and sync modules itself so you must obey the rules of sync's rules.