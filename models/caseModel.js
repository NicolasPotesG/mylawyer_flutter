const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    startDate: Date,
    description: String,
    type: String,
    status: String,
    clientId: String,
    lawyerId: String,
    endDate: String,
});

module.exports = mongoose.model("Case", caseSchema);