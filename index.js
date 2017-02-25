var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// use port 3000 unless there exists a preconfigured port	
var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});
