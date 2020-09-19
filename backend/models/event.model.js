const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    community:{
        required: true,
        type: String,
        trim: true
    },
    title: {
        required: true,
        type: String,
        trim: true
    },
    description: {
        required: true,
        type: String,
        trim: true
    },
    banner: {
        required: true,
        type: String,
        trim: true
    },
    createdAt: {
        required: true,
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Event', eventSchema);