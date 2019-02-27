var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('./login');
});

app.get('/auth/google', function(req, res) {
  res.render('./content');
});

app.listen(3000);