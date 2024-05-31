const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
    SNo: {
        type: Number,
    },
    companyName: {
        type: String
    },
    logo: {
        type: String
    },
    role: {
        type: String
    },
    category: {
        type: String
    },
    skills: {
        type: [String],
    },
    timings: {
        type: String
    },
    type: {
        type: String,
    },
    duration: {
        type: Number
    },
    location: {
        type: String
    },
    stipend: {
        type: Number
    },
    applicantsNo: {
        type: Number
    },
    positions: {
        type: Number
    },
    experience: {
        type: String
    }
})

module.exports = Internship = mongoose.model('internship',InternshipSchema);