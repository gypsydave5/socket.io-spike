var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response){
	var options = { root: './' };
	response.sendFile('index.html', options);
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('a user disconnected')
	});
	socket.on('chat message', function(msg){
		console.log('message :' + msg);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});