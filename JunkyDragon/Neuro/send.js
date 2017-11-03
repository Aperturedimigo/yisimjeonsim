var io = require('socket.io-client');
var socket = io.connect("http://163.44.165.68:8080");

socket.emit('attention', "hello");
socket.on('attention', function(data){
  console.log(data);
});
