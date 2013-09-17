
var _ = require('underscore');
var Sync = require('sync');

var Regex = {};
	Sync(function(){
		Regex.WORD = /[A-Za-z][A-Za-z'\-\.]*[A-Za-z]/;
		Regex.OCTET = /25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9]/;
		Regex.MAC = /[0-9a-fA-F]{2}(?::[0-9a-fA-F]{2}){5}/;
		Regex.IPv4 = /#{OCTET}(?:\.#{OCTET}){3}(?:\/\d{1,2})?/;
		Regex.IPv6 = _.union(
			  /(?:[0-9a-f]{1,4}:){6}#{IPv4}/,
			  /(?:[0-9a-f]{1,4}:){5}[0-9a-f]{1,4}:#{IPv4}/,
			  /(?:[0-9a-f]{1,4}:){5}:[0-9a-f]{1,4}:#{IPv4}/,
			  /(?:[0-9a-f]{1,4}:){1,1}(?::[0-9a-f]{1,4}){1,4}:#{IPv4}/,
			  /(?:[0-9a-f]{1,4}:){1,2}(?::[0-9a-f]{1,4}){1,3}:#{IPv4}/,
			  /(?:[0-9a-f]{1,4}:){1,3}(?::[0-9a-f]{1,4}){1,2}:#{IPv4}/,
			  /(?:[0-9a-f]{1,4}:){1,4}(?::[0-9a-f]{1,4}){1,1}:#{IPv4}/,
			  /:(?::[0-9a-f]{1,4}){1,5}:#{IPv4}/,
			  /(?:(?:[0-9a-f]{1,4}:){1,5}|:):#{IPv4}/,
			  /(?:[0-9a-f]{1,4}:){1,1}(?::[0-9a-f]{1,4}){1,6}(?:\/\d{1,3})?/,
			  /(?:[0-9a-f]{1,4}:){1,2}(?::[0-9a-f]{1,4}){1,5}(?:\/\d{1,3})?/,
			  /(?:[0-9a-f]{1,4}:){1,3}(?::[0-9a-f]{1,4}){1,4}(?:\/\d{1,3})?/,
			  /(?:[0-9a-f]{1,4}:){1,4}(?::[0-9a-f]{1,4}){1,3}(?:\/\d{1,3})?/,
			  /(?:[0-9a-f]{1,4}:){1,5}(?::[0-9a-f]{1,4}){1,2}(?:\/\d{1,3})?/,
			  /(?:[0-9a-f]{1,4}:){1,6}(?::[0-9a-f]{1,4}){1,1}(?:\/\d{1,3})?/,
			  /[0-9a-f]{1,4}(?::[0-9a-f]{1,4}){7}(?:\/\d{1,3})?/,
			  /:(?::[0-9a-f]{1,4}){1,7}(?:\/\d{1,3})?/,
			  /(?:(?:[0-9a-f]{1,4}:){1,7}|:):(?:\/\d{1,3})?/
			);
		Regex.IP = /#{IPv4}|#{IPv6}/;
		Regex.HOST_NAME = /(?:[a-zA-Z0-9]+(?:[_-][a-zA-Z0-9]+)*\.)+(?:#{union(Resolv::TLDS)})/i;
		Regex.USER_NAME = /[A-Za-z](?:[A-Za-z0-9]*[\._-])*[A-Za-z0-9]+/;
		Regex.EMAIL_ADDR = /#{USER_NAME}\@#{HOST_NAME}/;
		Regex.PHONE_NUMBER = /(?:\d[ \-\.]?)?(?:\d{3}[ \-\.]?)?\d{3}[ \-\.]?\d{4}(?:x\d+)?/;
		Regex.DELIMITER = /[;&\n\r]/;
		Regex.IDENTIFIER = /[_]*[a-zA-Z]+[a-zA-Z0-9_-]*/;
		Regex.FILE_EXT = /(?:\.[A-Za-z0-9]+)+/;
		Regex.FILE = /#{FILE_NAME}(?:#{FILE_EXT})?/;
		Regex.DIRECTORY = /(?:\.\.|\.|#{FILE})/;
		Regex.RELATIVE_UNIX_PATH = /(?:#{DIRECTORY}\/)+#{DIRECTORY}\/?/;
		Regex.ABSOLUTE_UNIX_PATH = /(?:\/#{FILE})+\/?/;
		Regex.UNIX_PATH = /#{ABSOLUTE_UNIX_PATH}|#{RELATIVE_UNIX_PATH}/;
		Regex.RELATIVE_WINDOWS_PATH = /(?:#{DIRECTORY}\\)+#{DIRECTORY}\\?/;
		Regex.ABSOLUTE_WINDOWS_PATH = /[A-Za-z]:(?:\\#{FILE})+\\?/;
		Regex.WINDOWS_PATH = /#{ABSOLUTE_WINDOWS_PATH}|#{RELATIVE_WINDOWS_PATH}/;
		Regex.RELATIVE_PATH = /#{RELATIVE_UNIX_PATH}|#{RELATIVE_WINDOWS_PATH}/;
		Regex.ABSOLUTE_PATH = /#{ABSOLUTE_UNIX_PATH}|#{ABSOLUTE_WINDOWS_PATH}/;
		Regex.PATH = /#{UNIX_PATH}|#{WINDOWS_PATH}/;
	})

module.exports = Regex;

