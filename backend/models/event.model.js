const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    community: {
        required: [true, "Please enter a community."],
        type: String,
        trim: true
    },
    title: {
        required: [true, "Please enter a title."],
        type: String,
        trim: true
    },
    eventDate: {
        required: [true, "Please enter event date."],
        type: Date
    },
    description: {
        required: [true, "Please enter a description"],
        type: String,
        trim: true
    },
    pdfPath: {
        type: String,
        trim: true,
    },
    eventLink: {
        type: String,
        trim: true
    },
    banner: {
        type: String,
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Event', eventSchema);