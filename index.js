var cool = require('cool-ascii-faces');
var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
});
