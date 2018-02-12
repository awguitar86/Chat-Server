var express = require('express');  //this is how to import/require things in a node server.
var bodyParser = require('body-parser');
var mc = require( __dirname + '/controllers/messages_controller' );

var app = express();  //this creates an express app by saving it to a variable.

app.use( bodyParser.json() );  //this configures the express app to parse JSON from the body.

const port = 3000;  //port is saved to a variable in case it needs changed, it only needs changed once.
app.listen( port, () => { console.log(`Server is listening on port ${port}`); } );  //this uses the listen method from express to let the app know what port to listen on. 

