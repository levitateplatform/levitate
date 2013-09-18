
## Packing & Unpacking methods
Packing and unpacking methods

#### pack ( * array ) -> ( string(packed) )
Takes all climate array and returns a packed string.
They packed in byte array and injected into the string.
<pre>
<code>
µ.pack([0x1234, "hello"]);

=> '\u3400'
</code>
</pre>

#### unpack ( string(packed) ) -> ( hex array )
Takes packed string and returns a hex array divided into fractions based on 16.
These methods are not relying on Buffer system in node so don't be judge output strings. Strings are not in format.
<pre>
<code>
µ.unpack('\u9773');

=> [151, 115]
</code>
</pre>