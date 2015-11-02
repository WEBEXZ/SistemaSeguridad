var express = require('express'),http = require('http');
var main = express();
var server = http.createServer(main);

server.listen(8070);

var io = require("socket.io").listen(server);

io.sockets.on('connection', function(socket){
	socket.on('newFrame', function(img){
		io.sockets.emit('setFrame', img);
	});
});

main.get('/',function(req,res){
	res.sendfile("index.html");
	console.log("Se respondio una peticion a /");
});

main.get('/cliente',function(req,res){
	res.sendfile("cliente.html");
	console.log("Se respondio una peticion a cliente");
});