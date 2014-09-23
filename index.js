var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(request, response){
	var options = { root: './' };
	response.sendFile('index.html', options);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});