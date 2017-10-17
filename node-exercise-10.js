/*  # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## TIME SERVER (Exercise 10 of 13)

  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection. */
function addZero(d) {
  return d < 10 ? ("0" + d) : d;
}

var net = require('net');
var server = net.createServer(function(socket) {
  var d = new Date();
  var time = d.getFullYear() + '-' +
    addZero(d.getMonth() + 1) + '-' +
    addZero(d.getDate()) + ' ' +
    addZero(d.getHours()) + ':' +
    addZero(d.getMinutes());
  socket.end(time + '\n');
});
server.listen(process.argv[2]);
