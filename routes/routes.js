//routes.js serves as our controller/router

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
// var validatePhoneNumber = require("./validator"); --might use later 

// Routes
// =============================================================
module.exports = function (app) {

    // index route loads index.handlebars
    app.get("/", function (req, res) {
        res.render("index", {});
    });



    

}
