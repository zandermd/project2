//routes.js serves as our controller/router

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
// var validatePhoneNumber = require("./validator"); --might use later

// Routes
// =============================================================
module.exports = function(app) {
  // index route loads index.handlebars
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  //addcontact route creates a 'people' object using the .create sequelize call, using the parameters passed through the request
  app.post("/addcontact", function(req, res) {
    isValid = validatePhoneNumber(req.body.phone);
    if (isValid) {
      db.People.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message
      }).then(function(dbContact) {
        console.log(dbContact);
        res.redirect("sweetalertconfirm");
      });
    } else {
      res.redirect("sweetalerterror");
      // res.status(400).jsonp({ error: 'Your phone number is invalid' });
    }
  });

  app.get("/sweetalerterror", function(req, res) {
    res.render("sweetalerterror", {});
  });

  app.get("/sweetalertconfirm", function(req, res) {
    res.render("sweetalertconfirm", {});
  });

  event => sweetAlert(event);
};
