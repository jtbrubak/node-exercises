/*This problem is the same as the previous problem (HTTP COLLECT) in that
you need to use http.get(). However, this time you will be provided with
three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs
and print it to the console (stdout). You don't need to print out the
length, just the data as a String; one line per URL. The catch is that you
must print them out in the same order as the URLs are provided to you as
command-line arguments. */

var http = require('http');
var strings = [];
for (var i = 2; i < process.argv.length; i++) {
  http.get(process.argv[i], function(response) {
    str = ""
    response.setEncoding('utf8');
    response.on('data', function(data) {
      str += data;
    });
    response.on('end', function() {
      strings[i] = str;
      while (i !== 2 || strings[i-1] !== undefined) {}
      console.log(strings[i]);
    });
  });
}
