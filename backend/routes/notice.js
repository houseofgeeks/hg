var express = require("express");
var router = express.Router();

const auth = require("../util/auth");
const Notice = require("../models/notice.model");

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
				message: 'Something went wrong'
      });
      console.log(err);
    });
});

// Returns all the Notices (sorted : latest first)
router.get("/", (req, res, next) => {
  Notice.find({})
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json({
        result: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong",
      });
    });
});

module.exports = router;
