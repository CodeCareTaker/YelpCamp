var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp_v5");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = require("./models/campgrounds")

    //Campground.create(
    //{
    //    name: "Bruce Peninsula",
    //    image: "http://1.bp.blogspot.com/-ybD4PHeZxdY/TheUx6C53OI/AAAAAAAAAXg/OF7AQ01_ffA/s1600/IMG_0334.JPG",
    //    description: "Pork sirloin chuck venison pig. Pork belly sirloin brisket pork tail biltong kevin burgdoggen strip steak doner meatball ham prosciutto. Burgdoggen flank ball tip chicken bresaola cupim pork leberkas cow."
    //}, 
    //function(err, campground){
    //    if(err){
    //        console.log(err);
    //    } else {
    //        console.log("NEWLY CREATED CAMPGROUND: ");
    //        console.log(campground);
    //    }
    //});

// var campgrounds = [
//             {name: "Algonquin Provincial Park", image: "https://i.ytimg.com/vi/sJPhjDCP1Xk/maxresdefault.jpg"},
//             {name: "Bon Echo Provincial Park", image: "https://4.bp.blogspot.com/-a6DJ8-5zjfs/VrYZzfjdijI/AAAAAAAABF8/6l03V4RtXOU/s1600/Our%2BSite%2B317%2BEvening%2BView.JPG"},
//             {name: "Bruce Peninsula", image: "http://1.bp.blogspot.com/-ybD4PHeZxdY/TheUx6C53OI/AAAAAAAAAXg/OF7AQ01_ffA/s1600/IMG_0334.JPG"},
//             {name: "Killbear", image: "http://commoncentsmom.com/wp-content/uploads/2016/05/shutterstock_152384810.jpg"},
//             {name: "Rushing River", image: "http://www.northernontario.travel/sites/default/files/styles/cover_proportional/public/leads/aa60bf3dba7b06bf9bbc06ae7996d676_XL.jpg?itok=bUU7blio"},
//             {name: "Tobermory", image: "https://waterloosia.files.wordpress.com/2013/05/img_1762.jpg"}
// ];

app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index",{campgrounds:allCampgrounds}); 
        }
    });
    
    
});

//CREATE - Add new campground to database
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

//SHOW - Show info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});