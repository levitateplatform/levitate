## Conversion methods

These are the main conversion methods
You can interpret byte values as hex.

#### strtodec ( string ) -> ( dec array )
Takes a string and returns a dec array
<pre>
<code>
µ.strtodec('BB');

=> [66, 66]
</code>
</pre>

#### bytes ( string | hex array) -> ( hex array )
Takes a string or hex mixed array and returns a hex array
<pre>
<code>
µ.bytes(['A', 'BB', 0x90]);

=> ['41', '42', '42', '90']
</code>
</pre>

#### chars ( hex array ) -> ( char array )
Takes a pure hex array and returns a char array
<pre>
<code>
µ.chars([0x41, 0x41, 0x20]);

=> ["A", "A", " "]
</code>
</pre>
