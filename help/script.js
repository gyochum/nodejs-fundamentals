var parser = require('node-markdown');
var html = parser.Markdown('Using **markdown** helps you focus on writing');
console.log(html);