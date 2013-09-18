## Decoding methods
General decoding methods

#### strict_decode64 ( string ) -> ( string )
String decrypted with strict rules base64 and returned back.
<pre>
<code>
µ.strict_decode64('TEVWSVRBVEU=');

=> 'LEVITATE'
</code>
</pre>

#### urlsafe_decode64 ( string ) -> ( string )
String decrypted with urlsafe way base64 and returned back.
<pre>
<code>
µ.urlsafe_decode64('a29ydGVrcy0tX18rKy8v');

=> 'korteks--__++//'
</code>
</pre>