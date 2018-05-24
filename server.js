var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App
var app = express();

// Set Port
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, './app/public')));


// Setup App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
  console.log("Server listening on: http://localhost:" + PORT);
});