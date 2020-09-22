const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
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
    }
});

module.exports = new mongoose.model('Notice', noticeSchema);