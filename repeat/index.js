var connect = require('connect');
var app = connect()
						.use(connect.bodyParser())
						.use(connect.static('public'))
						.use(function(request, response){
							if(request.url === '/process'){
								response.end(request.body.name + ' would repeat ' + request.body.repeat + ' times.');
							}
							else{
								response.end('invalid request');
							}
						})
						.listen(3000);
