var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require("./routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));
app.use(express.static('./public/views'));
app.use(express.static('./public/views/images'));

app.use(routes);

app.listen(4010, function () {
  console.log('Example app listening on port 4010!');
});
