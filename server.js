var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 3000;

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.use(express.static(path.join(__dirname, "./public")));
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use("/", routes);

app.listen(port);