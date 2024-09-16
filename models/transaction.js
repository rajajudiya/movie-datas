const mongoose =  require("mongoose");

const userSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    path : {
        type : String
    },
    releaseDate : {
        type : Date,
        default : Date.new
    },
    rating : {
        type : Number,
        required : true
    }

})

const tracker = mongoose.model("tracker", userSchema);

module.exports = tracker;