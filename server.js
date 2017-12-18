var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var sessions = require('client-sessions');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()) ;

//cookie
app.use(cookieParser());

//session
//app.use(session({secret: "project", saveUninitialized: true, resave: true}));
app.use(sessions({
  cookieName:"userCookie",
  secret:"ejdkjasdsdasdj"
}));

//Handle requests from static pages
app.use(express.static("./client/dist"));


// We want to extract the port to publish our app on
var port = process.env.PORT || 3000;

var connection = require("./config/connectionDB");
//Setup routes
var router = require('./app/routes')

router.route(app);
app.listen(port);
