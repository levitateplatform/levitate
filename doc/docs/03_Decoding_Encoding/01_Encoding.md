## Encoding methods
General encoding methods

#### strict_encode64 ( string ) -> ( string )
String encrypted with strict ruled base64 and returned back.
<pre>
<code>
µ.strict_encode64('korteks');

=> 'a29ydGVrcw=='
</code>
</pre>

#### urlsafe_encode64 ( string ) -> ( string )
String encrypted with urlsafe way base64 and returned back.
<pre>
<code>
µ.urlsafe_encode64('partial??==--__++//');

=> 'cGFydGlhbD8_PT0tLV9fKysvLw'
</code>
</pre>