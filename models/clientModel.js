const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    idAuth: String,
    name: {
        type: String,
        required: [true, "A client must have a name"]
    },
    phoneNumber: Number,
    emailAddress: String,
    hasMeetings: Boolean,
    contactedLawyersEmail: Number,
    contactedLawyersPhone: Number,
    appoimentsDone: Number
});

module.exports = mongoose.model("Client", clientSchema);