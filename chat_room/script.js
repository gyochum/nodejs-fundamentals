//load packages
var io = require('socket.io');
var connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var socket = io.listen(app);

socket.sockets.on('connection', function(s){
	s.emit('entrance', {message: 'welcome to the chat room!'});
	
	s.on('disconnect', function(){
		socket.sockets.emit('exit', {message: 'a chatter has disconnected'});
	});
	
	s.on('chat', function(data){
		socket.sockets.emit('chat', {message: '#' + data.message});
	});
	
	socket.sockets.emit('entrance', {message: 'a new chatter is online'});
});