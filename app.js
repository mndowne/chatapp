var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var users = [];
var connections = [];

server.listen(process.env.PORT || 3000);

console.log('server is up on 3000');

app.get('/', function(req,res){
  res.sendFile(__dirname + "/index.html");
});


io.sockets.on('connection',function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  //Disconnect
  connections.splice(connections.indexOf(socket),1);
  console.log('disconnected: %s sockets connected', connections.length);

});
