var express = require("express");
var router = express.Router();

const auth = require("../util/auth");
const Notice = require("../models/notice.model");

// Creates a notice
router.post("/", auth, function (req, res, next) {
  const notice = new Notice({
    title: req.body.title,
    description: req.body.description,
    pdfPath: req.body.pdfPath || null,
    eventLink: req.body.eventLink || null,
  });

  notice
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

// Returns 10 the Notices (sorted : latest first)
router.get("/", (req, res, next) => {
  Notice.find({})
    .sort({ createdAt: -1 })
    .limit(10)
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

// Returns all the notices
router.get("/all", (req, res, next) => {
  Notice.find({})
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

// Deletes a Notice
router.delete("/:id", auth, (req, res, next) => {
  Notice.findOneAndRemove({ _id: req.params.id })
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

// Should we allow updation to notices, requires disussion

module.exports = router;
