var Campground = require("../models/campground");
var Comment    = require("../models/comment");

//all the middleware goes into this file
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()) {
            Campground.findById(req.params.id, function(err, editCampground) {
                if(err){
                    req.flash("error", "Campground not found");
                    res.render("/campgrounds");
                } else {
                    // does user own the campground?
                    if(editCampground.submittedBy.id.equals(req.user._id)) {
                        next();
                    } else {
                        req.flash("error", "You are not authorized to edit this campground");
                        res.redirect("back");
                    }
                }
            });
        } else {
            req.flash("error", "You must login to edit a campground");
            res.redirect("back");
        }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()) {
            Comment.findById(req.params.comment_id, function(err, foundComment) {
                if(err){
                    req.flash("error", "Comment not found");
                    res.render("/campgrounds");
                } else {
                    // does user own the comment?
                  if(foundComment.author.id.equals(req.user._id)) {
                    next();
                  } else {
                    req.flash("error", "You are not authorized to edit this comment");
                    res.redirect("back");
                  }
                }
            });
        } else {
            req.flash("", "You must login to edit a comment");
            res.redirect("back");
        }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Login First!");
    res.redirect("/login");
};

module.exports = middlewareObj;

