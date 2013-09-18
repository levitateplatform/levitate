## Path methods

#### escape_path ( string ) -> ( string )
Give a abnormal path and take out the normalized path. This method is not node.js's normalize method only also tears down the duplications of forward slashes.

* Home expandation is not ready it will come in.

<pre>
<code>
µ.escape_path('//Users//Volumes/DATASTOR///2013/Photos')

=> '/Users/Volumes/DATASTOR/2013/Photos'
</code>
</pre>

## File Processing methods

#### each_line ( path, callback ) -> ( file )
Takes a file with its path and process it with async callbacks.

* In next versions of levitate we will support chaining for async.

<pre>
<code>
µ.each_line('test/data.txt', function(line){
    console.log("COOL LINE BRO: "+line);
})

=> 'COOL LINE BRO: data'... > stdout
</code>
</pre>

#### each_row ( path, seperator, callback ) -> ( file )
Takes a file with its path and process it with async callbacks. 
You can declare row definition with seperators.
<pre>
<code>
µ.each_line('test/data.txt', '$' , function(line){
    console.log(line);
})

=> 'Biscuit cotton candy lemon drops. Croissant sugar' ... > stdout
</code>
</pre>
<strong>For example this text is given and delimiter is `$`:</strong>
<p>
Biscuit cotton candy lemon drops. Croissant sugar$ plum biscuit. Caramels I love cookie pastry pudding sesame snaps gummies sugar plum chocolate $cake. Icing topping lollipop applicake cheesecake tart$ I love oat cake biscuit. Ice cream pie marzipan pudding. Gingerbread candy $brownie lollipop I love soufflé gummi bears.
</p>
<strong>First row is:</strong>
<p>Biscuit cotton candy lemon drops. Croissant sugar</p>
<strong>Second:</strong>
<p> plum biscuit. Caramels I love cookie pastry pudding sesame snaps gummies sugar plum chocolate </p>
and it goes on...
