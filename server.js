var express = require('express');//to import express library for server connections
var morgan = require('morgan');// to import morgan library for printing log like connnected to port 8080
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/articleone',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});
app.get('/articletwo',function(req,res){
  res.send('Article two Requested and will be served here');
});
app.get('/articlethree',function(req,res){
  res.send('Article three Requested and will be served here');
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
