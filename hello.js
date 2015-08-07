var os = require('os');
var message = 'we are running on Node.js ' + process.version + ' on a ' + os.type() + '-based operating system.';

console.log(message);