## Hexdump functions

#### hexdump ( data ) -> ( string (hexdumped as ascii) )
Takes data and hexdumps ascii

<pre>
<code>
µ.hexdump('.')

=> '2e...... ........ ........ ........     .\n'
</code>
</pre>

#### hexdump2file ( path, data ) -> ( file )
Takes data and hexdumps ascii to given file

<pre>
<code>
µ.hexdump2file('text/tekst.txt', '.')

=> '2e...... ........ ........ ........     .\n' > tekst.txt
</code>
</pre>