var connect = require('connect');

var data = {
	"fruita": "manzana",
	"numero": "555.555.5555",
	"color": "morado"
};

var app = connect().use(function(request, response){
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(data));
})
.listen(3000);