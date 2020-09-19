const express = require("express");
const router = express.Router();
const auth = require("../util/auth");

const Event = require("../models/event.model");

router.get("/", (req, res, next) => {
  Event.find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .then((result) => {
      res.status(200).json({
        result: result,
        message: "OK",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
});

router.get("/all", (req, res, next) => {
  Event.find({})
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json({
        result: result,
        message: "OK",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
});

router.post("/", auth, (req, res, next) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    community: req.body.community,
    banner: req.body.banner,
  });
  event
    .save()
    .then((result) => {
			res.status(201).json({
        result: result,
        message: 'OK'
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

router.put('/:id', auth, (req, res, next) => {
	const {title, description, community, banner} = req.body;
	Event.findOneAndUpdate({_id: req.params.id}, {title, description, community, banner},)
	.then((result) => {
		res.status(200).json({
			result,
			message: 'OK'
		})
	})
	.catch(err => {
		res.status(500).json({
			message: 'Something went Wrong'
		})
		console.log(err);
	})
})

router.delete("/:id", auth, (req, res, next) => {
  Event.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "OK",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
});

module.exports = router;
