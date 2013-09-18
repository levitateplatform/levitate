## Float methods

Inner encodings will be like that:

* ascii
* utf8
* utf16le
* ucs2
* base64
* binary
* hex

### Little Endians

* zero trimmed

#### pack32LE ( float array, encoding ) -> ( byte sequence packed as string )
Give float values as array and their encodings in second argument, it returns the byte sequence packed as string for 32-bit floats.

<pre>
<code>
µ.pack32LE([0.42], 'ascii')

=> ["=\nW>"]
</code>
</pre>


#### pack64LE ( float array, encoding ) -> ( byte sequence packed as string )
Give float values as array and their encodings in second argument, it returns the byte sequence packed as string for 64-bit floats.

<pre>
<code>
µ.pack64LE([0.42], 'ascii')

=> ["data"]
</code>
</pre>


#### pack128LE ( float array, encoding ) -> ( byte sequence packed as string )
Give float values as array and their encodings in second argument, it returns the byte sequence packed as string for 64-bit floats.

<pre>
<code>
µ.pack128LE([0.42], 'utf8')

=> ["data"]
</code>
</pre>

### Big Endians

* zero trimmed

#### pack32BE ( float array, encoding ) -> ( byte sequence packed as string )
Give float values as array and their encodings in second argument, it returns the byte sequence packed as string for 32-bit floats.

<pre>
<code>
µ.pack64BE([0.42], 'ascii')

=> [">W\n="]
</code>
</pre>

#### pack64BE ( float array, encoding ) -> ( byte sequence packed as string )
Give float values as array and their encodings in second argument, it returns the byte sequence packed as string for 32-bit floats.

<pre>
<code>
µ.pack64BE([0.42], 'ucs2')

=> ["data"]
</code>
</pre>


#### pack32LE ( float array, encoding ) -> ( byte sequence packed as string )
Give float values as array and their encodings in second argument, it returns the byte sequence packed as string for 32-bit floats.

<pre>
<code>
µ.pack32LE([0.42], 'base64')

=> ["data"]
</code>
</pre>