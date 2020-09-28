const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    community: {
        required: true,
        type: String,
        trim: true
    },
    title: {
        required: true,
        type: String,
        trim: true
    },
    createdAt: {
        required: true,
        type: Date,
        default: Date.now
    },
    description: {
        required: true,
        type: String,
        trim: true
    },
    pdfPath: {
        type: String,
        trim: true,
    },
    eventLink: {
        type: String,
    },
    banner: {
        type: String,
        trim: true
    }
});

module.exports = new mongoose.model('Event', eventSchema);