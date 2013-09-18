var µ = require('../levitate');
var util = require('util');

/**
 * Expand test OK
 */

µ.extendWith('little-logger', 'git://github.com/monsur/little-logger.git');
setTimeout(function(){
	µ = µ.loadModule(µ, 'little-logger');	
	
	var l = new µ.Logger();
	l.info('The default log level is "info".');

}, 5000);

/**
 * Sync test OK
 */

µ.sync(function(){
	console.log('SYNC');
});

var iterator = µ.async.iterator([
    function(){ console.log('one'); },
    function(){ console.log('two'); },
    function(){ console.log('three'); }
]);

var iterator2 = iterator();
var iterator3 = iterator2();
console.log(iterator2 + '$$' + iterator3);