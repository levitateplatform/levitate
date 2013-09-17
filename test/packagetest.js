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