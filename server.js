var express = require('express');//to import express library for server connections
var morgan = require('morgan');// to import morgan library for printing log like connnected to port 8080
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'articleone':{heading:"author! shourya gupta",
    date:"25 feb 2018",
    content:`
<H1>Heading one added</H1>
<p>paragraph one added<br>this pragraph do not contain any meaningfull information </p>
<H2> heading without paragraph</h2>}`},
    'articletwo':{heading:"author! shourya gupta",
    date:"26 feb 2018",
    content:`
<H1>Heading one added</H1>
<p>paragraph one added<br>this pragraph do not contain any meaningfull information </p>
<H2> heading without paragraph</h2>`},
    'articlethree':{heading:"author! shourya gupta",
    date:"27 feb 2018",
    content:`
<H1>Heading one added</H1>
<p>paragraph one added<br>this pragraph do not contain any meaningfull information </p>
<H2> heading without paragraph</h2>`},
    
};
//` allows us to enter multiple line string in javascript
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
var HtmlTemplate=`<html>
<head>
<title>${title}</title>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
${date}
<div class="container">
 ${content}
</div>
<div>
<p>hey we are not applying css here</p>

</div>
</body>
</html>`;
 return (HtmlTemplate);
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter=0;
app.get('/counter'),function(req,res){
    counter=counter+1;
    res.send(counter.toString());//response is only send as a string
    
};
app.get('/:articleName',function(req,res){//feature of express framework

//articleName==articleone
//articles[articleName]={} content object for article one
  var articleName=req.params.articleName;//functionalities provided by express framework
  res.send(createTemplate(articles[articleName]));
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
