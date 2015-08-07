var connect = require('connect');

var data = {
	'fruit': 'apple',
	'number': '555-1212',
	'color': 'purple'
};

var app = connect()
						.use(function(request, response){
							response.setHeader('Content-Type', 'application/json');
							response.end(JSON.strongify(data));
						})
						.listen(3000);