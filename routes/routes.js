//routes.js serves as our controller/router
//we combined API and HTML routes in one file as 

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var validatePhoneNumber = require("./validator");

// Routes
// =============================================================
module.exports = function (app) {

    // index route loads index.handlebars
    app.get("/", function (req, res) {
        res.render("index", {});
    });



}
