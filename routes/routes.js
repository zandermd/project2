//routes.js serves as our controller/router
//we combined API and HTML routes in one file as

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var validatePhoneNumber = require("./validator");

// Routes
// =============================================================
module.exports = function(app) {
  // index route loads index.handlebars
  app.get("/", function(req, res) {
    res.render("index", {});
  });


  //dogpage route finds all dogs in the pet table and passes them to the dogpage handlebars page
  app.get("/dogpage", function(req, res) {
    db.Pets.findAll({}).then(function(dbPets) {
       console.log(dbPets);
      var hbsObject = {
        pet: dbPets
      };
      return res.render("dogpage", hbsObject);
    });
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
        isVolunteer: req.body.isVolunteer,
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


  //adoptcontact route finds the pig object that matches the id sent through the request
  //it then sends that pig object to adoptcontact handlebars, which is a form the user can use to indicate interest in adopting that specific pig
  app.post("/adoptcontact", function(req, res) {
    db.Pets.findAll({
      where: {
        id: req.body.pet_id
      }
    }).then(function(dbPet) {
      // console.log(dbPet);
      var hbsObject = {
        pig: dbPet
      };
      return res.render("adoptcontact.handlebars", hbsObject);
    });
  });

  //loads the contactus handlebars file which is a contact form for the user to enter their information
  app.get("/contactus", function(req, res) {
    res.render("contactus.handlebars", {});
  });

}
