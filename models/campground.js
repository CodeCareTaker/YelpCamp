var mongoose = require("mongoose")

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    ownerName: String,
    phoneNumber: String,
    addressNumber: String,
    streetName: String,
    city: String,
    province: String,
    country: String,
    price: String,
    description: String,
    submittedBy:{
             id: {
                 type: mongoose.Schema.Types.ObjectId,
                 ref: "User"
             },
             username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Campground", campgroundSchema);