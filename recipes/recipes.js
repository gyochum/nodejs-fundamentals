var recipes = require('./data/recipes').data;

exports.list = function(request, response){
	response.render('recipes.ejs', {
		title: 'clever kitchen: recipes',		
		recipes: recipes
	});
};

exports.single = function(request, response){
	var recipe = null;
	var data = recipes.filter(function(r){
		return r.url === request.params.title;
	});
	
	if(data && data.length > 0)
		recipe = data[0];
	
	if(recipe){
		recipe.title = 'clever kitchens - recipe';
		response.render('recipe.ejs', recipe);
	}
	else{
		response.render('error.ejs', { title: 'recipe not found'});
	}	
};

exports.suggest = function(request, response){
	
};

exports.add = function(request, response){
	response.render('suggest_result.ejs', {
		title: 'clever kitchens',
		name: request.body.name,
		ingredients: request.body.ingredients,
		directions: request.body.directions
	});
};



