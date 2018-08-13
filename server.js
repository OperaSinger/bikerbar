// Dependencies
// =============================================================
require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
 
// To serve static files such as images, CSS files, and JavaScript 
// files, use the express.static built-in middleware function in Express.
app.use(express.static(path.join(__dirname, 'app/public')));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/api-routes")(app);

require("./app/routing/html-routes")(app);

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});