var express = require('express');
var index = require('./routes/index');
var create = require('./routes/create');
var fetch = require('./routes/fetch');
var remove = require('./routes/remove');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();


//config
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//mongo
var mongoURI = 'mongodb://localhost/Heroes';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(){
  console.log('Error connection to MongoDB');
});

MongoDB.once('open', function(){
  console.log('MongoDB started');
});

//routes
app.use('/', index);
app.use('/create', create);
app.use('/fetch', fetch);
app.use('/remove', remove);

//server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on', port, 'press ctrl-c to end');
});
