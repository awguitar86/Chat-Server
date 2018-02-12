var express = require('express');
var bodyParser = require('body-parser');
var mc = require( __dirname + '/controllers/messages_controller');

var app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) ); 

const messagesBaseUrl = '/api/messages';
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete );

const port = 3000;
app.listen( port, () => { console.log( `Server is listenign on port ${port}`); });

