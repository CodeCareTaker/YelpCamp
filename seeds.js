var mongoose = require("mongoose")
var Campground = require("./models/campground")
var Comment    = require("./models/comment")

var data = [
            {
                name: "Algonquin Provincial Park", 
                image: "https://i.ytimg.com/vi/sJPhjDCP1Xk/maxresdefault.jpg",
                description: "Meat ipsum dolor amet picanha beef ribs rump shankle porchetta. Porchetta tongue prosciutto brisket tenderloin filet mignon bacon biltong. Andouille t-bone corned beef pancetta boudin, tail brisket spare ribs biltong pork chop. Pork loin prosciutto fatback, jerky landjaeger strip steak filet mignon brisket shankle."
            },
            {
                name: "Bon Echo Provincial Park", 
                image: "https://4.bp.blogspot.com/-a6DJ8-5zjfs/VrYZzfjdijI/AAAAAAAABF8/6l03V4RtXOU/s1600/Our%2BSite%2B317%2BEvening%2BView.JPG",
                description: "Meat ipsum dolor amet picanha beef ribs rump shankle porchetta. Porchetta tongue prosciutto brisket tenderloin filet mignon bacon biltong. Andouille t-bone corned beef pancetta boudin, tail brisket spare ribs biltong pork chop. Pork loin prosciutto fatback, jerky landjaeger strip steak filet mignon brisket shankle."
            },
            {
                name: "Bruce Peninsula", 
                image: "http://1.bp.blogspot.com/-ybD4PHeZxdY/TheUx6C53OI/AAAAAAAAAXg/OF7AQ01_ffA/s1600/IMG_0334.JPG",
                description: "Meat ipsum dolor amet picanha beef ribs rump shankle porchetta. Porchetta tongue prosciutto brisket tenderloin filet mignon bacon biltong. Andouille t-bone corned beef pancetta boudin, tail brisket spare ribs biltong pork chop. Pork loin prosciutto fatback, jerky landjaeger strip steak filet mignon brisket shankle."
            },
            {
                name: "Killbear", 
                image: "http://commoncentsmom.com/wp-content/uploads/2016/05/shutterstock_152384810.jpg",
                description: "Meat ipsum dolor amet picanha beef ribs rump shankle porchetta. Porchetta tongue prosciutto brisket tenderloin filet mignon bacon biltong. Andouille t-bone corned beef pancetta boudin, tail brisket spare ribs biltong pork chop. Pork loin prosciutto fatback, jerky landjaeger strip steak filet mignon brisket shankle."
            },
            {
                name: "Rushing River", 
                image: "http://www.northernontario.travel/sites/default/files/styles/cover_proportional/public/leads/aa60bf3dba7b06bf9bbc06ae7996d676_XL.jpg?itok=bUU7blio",
                description: "Meat ipsum dolor amet picanha beef ribs rump shankle porchetta. Porchetta tongue prosciutto brisket tenderloin filet mignon bacon biltong. Andouille t-bone corned beef pancetta boudin, tail brisket spare ribs biltong pork chop. Pork loin prosciutto fatback, jerky landjaeger strip steak filet mignon brisket shankle."
            },
            {
                name: "Tobermory", 
                image: "https://waterloosia.files.wordpress.com/2013/05/img_1762.jpg",
                description: "Meat ipsum dolor amet picanha beef ribs rump shankle porchetta. Porchetta tongue prosciutto brisket tenderloin filet mignon bacon biltong. Andouille t-bone corned beef pancetta boudin, tail brisket spare ribs biltong pork chop. Pork loin prosciutto fatback, jerky landjaeger strip steak filet mignon brisket shankle."
            }
];
    
   
function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err)
        // }
        // console.log("removed campgrounds!");
        // //Add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground) {
        //         if(err){
        //             console.log(err);
        //         } else {
        //         console.log("added a campground");
        //         //Create a comment
        //         Comment.create(
        //             {
        //                 text: "This place is great, but I wish there was internet",
        //                 author: "Homer"
        //             }, function(err, comment){
        //                 if(err){
        //                     console.log(err);
        //                 } else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("Created new comment")
        //                 }
        //             });
                    
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;


