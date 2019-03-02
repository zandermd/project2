# What is Pet-List?
Pet-List is an webpage where the user can browse pets that need loving homes. Pet-List will also let users post pets up for adoption. 

# Requirements 
* Use a Node and Express Web Server
* Be backed by a MySQL Database an ORM (not necessarily Sequelize)
* Have both GET and POST routes for retrieving and adding new data
* Be deployed using Heroku (with Data)
* Utilize at least one new library, package, or technology that we haven’t discussed
* Have a polished frontend / UI
* Have folder structure that meets MVC Paradigm
* Meet good quality coding standards (indentation, scoping, naming)
* Must not expose sensitive API key information on the server

# Technologies used
* Node
* MySQL
* JavaScript
* Express Handlebars
* Sweet Alert (a new package that is a beautiful replacement for success messgages, error messages, etc)
* Method Override (a new middleware package for requests from clients that only natively support simple verbs like GET and POST. So in those cases you could specify a special query field (or a hidden form field for example) that indicates the real verb to use instead of what was originally sent. That way your backend .put()/.delete()/.patch()/etc. routes don't have to change and will still work and you can accept requests from all kinds of clients.)

