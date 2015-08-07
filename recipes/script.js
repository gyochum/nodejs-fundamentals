var express = require('express');

var server = express.createServer();
server.use(express.bodyParser());

var recipes = require('./recipes');

//routes
server.get('/', function(request, response){
	response.render('index.ejs', {title: 'Clever Kitchens'});
});

server.get('/recipes', recipes.list);

server.get('/recipes/:title', recipes.single);

server.get('/recipes/suggest', function(request, response){
	console.log('route found');
	response.render('suggest.ejs', { title: 'suggest a recipe'});
});
server.post('/recipes/suggest', recipes.suggest);

server.get('/*', function(request, response){
	response.status(404).render(
		'error.ejs', 
		{
			title: 'Error!'
		}
	);
});

server.listen(3000);