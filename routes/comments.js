var express    = require("express");
var router     = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment    = require("../models/comment");
var middleware = require("../middleware");

// ===================
// COMMENT ROUTES
// ===================

//Lets user type a new comment
router.get("/new", middleware.isLoggedIn, function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

//Posts created comment
router.post("/", middleware.isLoggedIn, function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            req.flash("error", err.message);
            res.redirect("/campgrounds");
        } else {
         Comment.create(req.body.comment, function(err, comment){
             if(err){
                 req.flash("error", err.message);
             } else {
                 //add username and id to comment
                 comment.author.id = req.user._id;
                 comment.author.username = req.user.username;
                 //save comment
                 comment.save();
                 campground.comments.push(comment);
                 campground.save();
                 console.log(comment);
                 req.flash("success", "Your comment has been posted");
                 res.redirect('/campgrounds/' + campground._id);
             }
         })
            console.log(req.body.comment);
        }
    })
    //create new comment
    //connect new comment to campground
    //redirect campground show page
});

//Comment Edit
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if(err){
            res.redirect("back");
        } else {
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
        }
    });
});

//Comment Update
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.render("back");
        } else {
            res.render("/campgrounds/" + req.params.id);
        }
    })
})

//Comment Destroy Route
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;
