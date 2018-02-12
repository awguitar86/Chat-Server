var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json() );

var port = 3000;
app.listen( port, () => { console.log( `Server is listenign on port ${port}`); });

