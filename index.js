var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');

app.get('/', function (req, res) {
  var filename = path.join(__dirname,"views/index.html");
  res.sendFile(filename,function(err){
    if(err){
      console.log(err);
      res.status(err.status).end();
    }
})});



app.get('/:datestring', function(req,res) {
  var myDate;
  if(/^\d{8,}$/.test(req.params.datestring)) {
    myDate = moment(req.params.datestring, "X");
  } else {
    myDate = moment(req.params.datestring, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }


});

// use port 3000 unless there exists a preconfigured port	
var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});
