var express = require('express');                       //this is how to import/require things in a node server.
var bodyParser = require('body-parser');
var mc = require( __dirname + '/controllers/messages_controller' );

var app = express();                                    //this creates an express app by saving it to a variable.

app.use( bodyParser.json() );                           //this configures the express app to parse JSON from the body.
app.use( express.static( __dirname + '/../public/build' ) ); 

const messagesBaseUrl = "/api/messages";                //make a messagesBaseUrl variable so that if the URL ever changes we won't have to update in four different places.
app.post( messagesBaseUrl, mc.create );                 //We can then use the built-in methods express gives us to create endpoints. 
app.get( messagesBaseUrl, mc.read );                    //We'll use post for create; get for read; put for update; and delete for delete.
app.put( `${messagesBaseUrl}/:id`, mc.update );         //For the put and delete endpoints, we need to add on a url parameter of id.
app.delete( `${messagesBaseUrl}/:id`, mc.delete );      //A url paramter can be defined by adding :variableName when making the URL for an endpoint.

const port = 3000;                                      //port is saved to a variable in case it needs changed, it only needs changed once.
app.listen( port, () => { console.log(`Server is listening on port ${port}`); } );  //this uses the listen method from express to let the app know what port to listen on.

