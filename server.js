// Load Node modules
var express = require('express');
list = require('./request.js').Request; // see  template
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));

app.get('/request', function(req, res){
    // run your request.js script
    // when index.html makes the ajax call to www.yoursite.com/request, this runs
    // you can also require your request.js as a module (above) and call on that:
    res.send(list.getList()); // try res.json() if getList() returns an object or array
});

// Port website will run on
app.listen(8080);

