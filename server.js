var express = require('express');//to import express library for server connections
var morgan = require('morgan');// to import morgan library for printing log like connnected to port 8080
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    articleone:{heading:"author! shourya gupta",
    date:"25 feb 2018",
    content:`
<H1>Heading one added</H1>
<p>paragraph one added<br>this pragraph do not contain any meaningfull information </p>
<H2> heading without paragraph</h2>}`},
    articletwo:{heading:"author! shourya gupta",
    date:"25 feb 2018",
    content:`
<H1>Heading one added</H1>
<p>paragraph one added<br>this pragraph do not contain any meaningfull information </p>
<H2> heading without paragraph</h2>`},
    articlethree:{heading:"author! shourya gupta",
    date:"25 feb 2018",
    content:`
<H1>Heading one added</H1>
<p>paragraph one added<br>this pragraph do not contain any meaningfull information </p>
<H2> heading without paragraph</h2>`},
    
};
var articleone={
    title:"article one",
    heading:"author! shourya gupta",
    date:"25 feb 2018",
    content:`
<H1>Heading one added</H1>
<p>paragraph one added<br>this pragraph do not contain any meaningfull information </p>
<H2> heading without paragraph</h2>
`
    
};//` allows us to enter multiple line string in javascript
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
app.get('/articleone',function(req,res){
  res.send(createTemplate(articleone));
});
app.get('/articletwo',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
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
