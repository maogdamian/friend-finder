// Dependencies
var path = require("path");


// Routing
module.exports = function(app) {

    app.get("/survey", function(req, res){
      res.sendFile(path.join(__dirname, "../public/survey.html"));
      // res.sendFile(path.join(__dirname, "../public/assets/javascript/survey.js"));      
      
    });

    // No matches default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};