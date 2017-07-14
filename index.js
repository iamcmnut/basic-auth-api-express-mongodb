var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/moonlight');

var port = process.env.PORT || 7001;

var router = express.Router();

var registerController = require('./controller/register');
var loginController = require('./controller/login');

router.post('/login', (req, res) => {
  loginController(req, res);
});

router.post('/register', (req, res) => {
  registerController(req, res);
});


app.use('/api', router);

app.listen(port);
console.log(`your API server is running on port ${port}`);