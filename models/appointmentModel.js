const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    dateHour: Date,
    description: String,
    clientId: String,
    lawyerId: String,
});

module.exports = mongoose.model("Appointment", appointmentSchema);