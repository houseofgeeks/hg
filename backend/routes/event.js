var express = require("express");
var router = express.Router();

const auth = require("../util/auth");
const Event = require("../models/event.model");

// Creates a event
router.post("/", auth, function (req, res, next) {
  const event = new Event({
    title: req.body.title,
    community: req.body.community,
    description: req.body.description,
    pdfPath: req.body.pdfPath || null,
    eventLink: req.body.eventLink || null,
    banner: req.body.banner || null
  });

  event
    .save()
    .then((result) => {
      res.status(201).json({
        result: result,
        message: "OK",
      });
      console.log(result);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
      });
      console.log(err);
    });
});

// Returns 5 the Event (sorted : latest first)
router.get("/", (req, res, next) => {
  Event.find({})
    .sort({ createdAt: -1 })
    .limit(5)
    .then((result) => {
      res.status(200).json({
        result: result,
        message: 'OK'
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong",
      });
    });
});

// Returns all the events
router.get("/all", (req, res, next) => {
  Event.find({})
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json({
        result: result,
        message: 'OK'
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong",
      });
    });
});

// Deletes a Event
router.delete("/:id", auth, (req, res, next) => {
  Event.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: 'OK'
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong",
      });
    });
});

// Should we allow updation to events, requires disussion

module.exports = router;
