var express    = require("express");
var router     = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

// ===================
// CAMPGROUND ROUTES
// ===================

//INDEX - show all campgrounds
router.get("/", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            req.flash("error", err.message);
        } else {
            res.render("campgrounds/index",{campgrounds:allCampgrounds}); 
        }
    });
});

//CREATE - Add new campground to database
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var desc = req.body.description;
    var submittedBy = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name, image: image, price: price, description: desc, submittedBy: submittedBy};
    // Create a new campground and save to DB
    
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            req.flash(newCampground.name + " has been added!");
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("campgrounds/new.ejs"); 
});

//SHOW - Show info about one campground
router.get("/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            req.flash("Campground not found");
            console.log(err);
            res.render("back");
        } else {
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});
//EDIT ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, editCampground) {
        res.render("campgrounds/edit", {campground: editCampground});
    });
});

//UPDATE ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    //update campground information
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updateCampground){
        if(err) {
            req.flash("error", "Campground update was unsuccessful, error: " + err.message);
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Campground has been updated");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//Delete Route
router.delete("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res) {
    //remove campground from the website
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            req.flash("error", "Campground deletion was unsuccessful, error: " + err.message);
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Campground has been deleted");
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;