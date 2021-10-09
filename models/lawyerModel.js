const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema({
    idAuth: String,
    name:{
        type: String,
        required: [true, "A lawyer must have a name"]
    },
    phoneNumber: String,
    emailAddress: String,
    casesWon: Number,
    field: String,
    hourlyFee: Number,
    rating: {
        type: Number,
        min: 0,
        max: 5,
      },
    numberOfRatings: Number,
    latitude: String,
    longitude: String,
    views: Number
});

module.exports = mongoose.model("Lawyer", lawyerSchema);