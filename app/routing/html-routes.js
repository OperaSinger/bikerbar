// var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/home.html"))
  
  });

  // Load bikes page
  app.get("/bikes", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/bikes.html"))
  });


}