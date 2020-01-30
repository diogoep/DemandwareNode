// Module dependencies.
var express = require("express")
  , http    = require("http")
  , path    = require("path")
  , routes  = require("./routes")
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , errorHandler = require('errorhandler')
  , cookieParser = require('cookie-parser');
var app = express();


// All environments
app.set("port", 80);
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'uwotm8'
}))
app.use(express.static(path.join(__dirname, 'public')));
// error handling middleware should be loaded after the loading the routes
if (app.get('env') === 'development') {
  app.use(errorHandler())
}

// App routes
app.get("/"        , routes.index);
app.get("/hello"   , routes.hello);
app.get("/mens-clothing", routes.mensClothing);
app.get("/mens-accessories", routes.mensAccessories);
app.get("/womens-clothing", routes.womensClothing);
app.get("/womens-jewelry", routes.womensJewelry);
app.get("/womens-accessories", routes.womensAccessories);


// Run server
http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
  //console.error("Error!");
}).on('error', (e) => console.log(e));
