var connect = require('connect');
var app = connect()
						.use(function(request, response){
							response.statusCode = 403;
							response.end('Forbidden');
						})
						.listen(3000);