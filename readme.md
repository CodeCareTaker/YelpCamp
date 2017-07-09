#Add Mongoose
* Install and configure Mongoose
* Setup comapground model
* Use campground model inside of our routes


#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

##Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model
* Make outr errors go away!
* Display commenrs on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

RESTFUL ROUTES
name      url          verb   desc.
=================================================
INDEX   /dogs          GET   Display a list of all dogs
NEW     /dogs/new      GET   Displays form to make a new dog
CREATE  /dogs          POST  Add new dog to DB
SHOW    /dogs/:id      GET   Show info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrouds/:id

NEW     campgrounds/:id/comments/new     GET
CREATE  campgrounds/:id/commnets         POST

##Style Show Page
* Add sidebar to show page
* Display comments nicely

##Finish Styling Show Page
* Add public directory
* Add custom stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

##Auth Pt. 2 - Register
* Install all packages needed for auth
* Add Register routes
* Add register template

##Refactor the routes
* Use Express router to reorginize all routes

##Users + Comments
* Assciate usersand comments
* Save author's name to a comment automatically

##Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

##Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campground
* Add Link to Edit Page
* Add Update Route
* Fix $set problem