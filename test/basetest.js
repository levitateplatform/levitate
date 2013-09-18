
var levarray = require('../lib/base/levarray')
var levbase64 = require('../lib/base/levbase64')
var levfile = require('../lib/base/levfile')
var levfloat = require('../lib/base/levfloat')
var levregex = require('../lib/base/levregex')
var levhexdump = require('../lib/base/levhexdump')

var levextern = require('../lib/external/levextern')

var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should()

var util = require('util');
var Sync = require('sync');
var async = require('async');
var fs = require('fs');

/**
 * Array functs. tests
 */

describe('Levitate Array', function(){
  describe('#init()', function(){
    it('should init the sequence of Array', function(){
    	var initobj = {}; 
    	initobj.mixedarray = ['A', 'BB', 0x90];
    	levarray.init(initobj);
    	assert.notEqual(levarray.mixedarray, undefined);
    })
  }),

  describe('#strtodec()', function(){
    it('should convert string [utf-8] to dec array', function(){
    	var test = 'BB';
    	assert.deepEqual(levarray.strtodec(test), [66, 66]);
    })
  }),

  describe('#bytes()', function(){
    it('should convert number, string or byte filled array to fully byte filled array', function(){
    	assert.deepEqual(levarray.bytes(['A', 'BB', 0x90]), ['41', '42', '42', '90']);
    })
  }),

  describe('#chars()', function(){
    it('should convert hex array to character array', function(){
    	assert.deepEqual(levarray.chars([0x41, 0x41, 0x20]), ["A", "A", " "]);
    })
  }),

  describe('#char_string()', function(){
    it('should convert byte array to string', function(){
    	assert.deepEqual(levarray.char_string([0x41, 0x41, 0x20]), "AA ");
    })
  }),

  describe('#pack()', function(){
    it('should packs the bytes into string', function(){
    	assert.deepEqual(levarray.pack([0x1234, "hello"]), '\u3400');
    })
  }),

  describe('#unpack()', function(){
    it('should unpacks the string into bytes', function(){
      assert.deepEqual(levarray.unpack('\u9773'), [151, 115]);
    })
  })
})

/**
 * Base64 tests
 */

describe('Levitate Base64', function(){
  describe('#strict_decode64()', function(){
    it('should strictly decodes base64 string', function(){
      assert.deepEqual(levbase64.strict_decode64('TEVWSVRBVEU='), 'LEVITATE');
    })
  }),

  describe('#strict_encode64()', function(){
    it('should strictly encodes base64 string', function(){
      assert.deepEqual(levbase64.strict_encode64('korteks'), 'a29ydGVrcw==');
    })
  }),

  describe('#urlsafe_decode64()', function(){
    it('should url-safe encodes base64 string', function(){
      assert.deepEqual(levbase64.urlsafe_decode64('a29ydGVrcy0tX18rKy8v'), 'korteks--__++//');
    })
  }),

  describe('#urlsafe_encode64()', function(){
    it('should strictly encodes base64 string', function(){
      assert.deepEqual(levbase64.urlsafe_encode64('partial??==--__++//'), 'cGFydGlhbD8_PT0tLV9fKysvLw');
    })
  })
})

/**
 * File tests
 */

describe('Levitate File', function(){
  describe('#each_line()', function(){
    it('should do callback with each line of file', function(){
      levfile.each_line('test/data.txt', function(line){
        assert.deepEqual(line+'', 'Danish');
      })
    })
  }),

  describe('#each_row()', function(){
    it('should do callback with each row of file (rows are declared by seperators)', function(){
      levfile.each_row('test/datasep.txt', 'love', function(line){
        // FIXME: review
        console.log(line);
        //assert.equal(line.length == 75, 'expected range for #each_row()');
      })
    })
  }),

  describe('#escape_path()', function(){
    it('should escape path characters (except ~ for now)', function(){
      assert.equal(levfile.escape_path('//Users//Volumes/DATASTOR///2013/Photos'),'/Users/Volumes/DATASTOR/2013/Photos');
    })
  }),

  describe('#md5()', function(){
    it('should calculate md5 of a file', function(){
      assert.equal(levfile.md5('test/datasep.txt').toUpperCase(), 'D79A75FA4EEC55367164233908E876DE');
    })
  }),

  describe('#sha1()', function(){
    it('should calculate sha1 of a file', function(){
      assert.equal(levfile.sha1('test/datasep.txt').toUpperCase(), '27163437942FD4ED91FE663A5C13137B50888F7F');
    })
  }),

  describe('#sha128()', function(){
    it('should calculate sha128 of a file', function(){
      assert.equal(levfile.sha128('test/datasep.txt').toUpperCase(), '27163437942FD4ED91FE663A5C13137B50888F7F');
    })
  }),

  describe('#sha2()', function(){
    it('should calculate sha2 of a file', function(){
      assert.equal(levfile.sha2('test/datasep.txt').toUpperCase(), '826262AE19C7F70BC8778BB22EBDD82EC54E8B2B0F1E08738877002D876A9965');
    })
  }),

  describe('#sha256()', function(){
    it('should calculate sha256 of a file', function(){
      assert.equal(levfile.sha256('test/datasep.txt').toUpperCase(), '826262AE19C7F70BC8778BB22EBDD82EC54E8B2B0F1E08738877002D876A9965');
    })
  }),

  describe('#sha5()', function(){
    it('should calculate sha5 of a file', function(){
      assert.equal(levfile.sha5('test/datasep.txt').toUpperCase(), '972C42131BBF4A25DEF4D1BB4F64DA9D852B929666F2444F0FDE4285C5CC22F17AC4BA1E466596311101556143A230B1287DF5A0A567551C178286D043FF317F');
    })
  }),

  describe('#sha512()', function(){
    it('should calculate sha512 of a file', function(){
      assert.equal(levfile.sha512('test/datasep.txt').toUpperCase(), '972C42131BBF4A25DEF4D1BB4F64DA9D852B929666F2444F0FDE4285C5CC22F17AC4BA1E466596311101556143A230B1287DF5A0A567551C178286D043FF317F');
    })
  })

})

/**
 * Float tests
 */

describe('Levitate Float', function(){

  //32 bit LE
  describe('#pack32LE() ASCII', function(){
    it('should pack 32-bit floats to bytes [ASCII]', function(){
      assert.deepEqual(levfloat.pack32LE([0.42], 'ascii'), ["=\nW>"]);
    })
  }),

  describe('#pack32LE() UTF-8', function(){
    it('should pack 32-bit floats to bytes [UTF-8]', function(){
      assert.deepEqual(levfloat.pack32LE([0.42], 'utf8'), ["=\n�>"]);
    })
  }),

  describe('#pack32LE() UCS2', function(){
    it('should pack 32-bit floats to bytes [UCS2]', function(){
      assert.deepEqual(levfloat.pack32LE([0.42], 'ucs2'), ["਽㻗"]);
    })
  }),

  describe('#pack32LE() base64', function(){
    it('should pack 32-bit floats to bytes [base64]', function(){
      assert.deepEqual(levfloat.pack32LE([0.42], 'base64'), ["PQrXPg=="]);
    })
  }),

  describe('#pack32LE() hex', function(){
    it('should pack 32-bit floats to bytes [hex]', function(){
      assert.deepEqual(levfloat.pack32LE([0.42], 'hex'), ["3d0ad73e"]);
    })
  }),

  //32 bit BE
  describe('#pack32BE() ASCII', function(){
    it('should pack 32-bit floats to bytes [ASCII]', function(){
      assert.deepEqual(levfloat.pack32BE([0.42], 'ascii'), [">W\n="]);
    })
  }),

  describe('#pack32BE() UTF-8', function(){
    it('should pack 32-bit floats to bytes [UTF-8]', function(){
      assert.deepEqual(levfloat.pack32BE([0.42], 'utf8'), [">�\n="]);
    })
  }),

  describe('#pack32BE() UCS2', function(){
    it('should pack 32-bit floats to bytes [UCS2]', function(){
      assert.deepEqual(levfloat.pack32BE([0.42], 'ucs2'), ["휾㴊"]);
    })
  }),

  describe('#pack32BE() base64', function(){
    it('should pack 32-bit floats to bytes [base64]', function(){
      assert.deepEqual(levfloat.pack32BE([0.42], 'base64'), ["PtcKPQ=="]);
    })
  }),

  describe('#pack32BE() hex', function(){
    it('should pack 32-bit floats to bytes [hex]', function(){
      assert.deepEqual(levfloat.pack32BE([0.42], 'hex'), ["3ed70a3d"]);
    })
  })

})

/**
 * Regex tests
 */

describe('Levitate Regex', function(){
  describe('#PATH() regex test', function(){
    it('should pass the regex matcher [PATH]', function(){
      //TODO: Rewrite regexes
      //assert.deepEqual(JSON.stringify('192.168.2.56'.match(levregex.IPv4)), '');
    })
  })
})

/**
 * Hexdump tests
 */

describe('Levitate Hexdump', function(){
  describe('#hexdump()', function(){
    it('should hexdump correctly', function(){
      assert.deepEqual(levhexdump.hexdump('.'), '2e...... ........ ........ ........     .\n');
    })
  }),

  describe('#hexdump2file()', function(){
    it('should hexdump to file correctly', function(){
      levhexdump.hexdump2file('test/hexdump.hex', '.');
      var content = fs.readFileSync('test/hexdump.hex');
      assert.deepEqual(content.toString(), '2e...... ........ ........ ........     .\n');
    })
  })
})

/**
 * Externing tests
 */

describe('Levitate Extern Itself', function(){
  describe('#externWith()', function(){
    it('should extern correctly', function(){
      //levextern.externWith("https://github.com/vertexclique/climax.git")
    })
  })
})