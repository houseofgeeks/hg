const Event = require("../models/event.model");

module.exports.create_event = async (req, res) => {
    try {
        const {event = {}} = req.body
        const result = await Event.create(event)
        res.status(201).json({
            result,
            message: "OK",
        });
    } catch (err) {
        const errors = _handleErrors(err)
        res.status(500).json({
            message: err.message || "Something went wrong",
            errors
        });
    }
}

module.exports.get_event = async (req, res) => {
    try {
        const {query, sort = {eventDate: -1}, limit} = req.body.options || {}
        const result = await Event.find(query)
            .sort(sort)
            .limit(limit)

        return res.status(200).json({
            result,
            message: "OK",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Something went wrong",
        });
    }
}

module.exports.delete_event = async (req, res) => {
    try {
        const event = await Event.findOne({_id: req.params.id})
        if (!event) {
            throw {message: "Can't find event on DB"}
        }
        await Event.deleteOne({_id: req.params.id})
        return res.status(200).json({
            message: "OK",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Something went wrong",
        });
    }
}

module.exports.update_event = async (req, res) => {
    try {
        const event = await Event.findOne({_id: req.params.id})
        if (!event) {
            throw {message: "Can't find event on DB"}
        }
        const updateObj = {$set: req.body.event}
        await Event.updateOne({_id: req.params.id}, updateObj)
        return res.status(200).json({message: "OK",});
    } catch (err) {
        console.log(err, "DB Err");
        res.status(500).json({
            message: err.message || "Something went wrong",
        });
    }
}

const _handleErrors = (err) => {
    const errors = {}
    if (err.message.includes('Event validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            if (properties) {
                errors[properties.path] = properties.message
            }
        })
    }
    return errors
}