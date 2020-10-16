const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

const Admin = require("../models/admin.model");

router.post("/login", function (req, res, next) {
  Admin.findOne({ username: "admin" })
    .then((admin) => {
      admin.checkPassword(req.body.pass)
        .then((result) => {
          const accessToken = jwt.sign({ username: "admin" }, process.env.JWT_SECRET, {expiresIn: "12h"});
          res.status(200)
            .json({
              message: "OK",
              accessToken: accessToken,
            })
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({
            message: "Wrong credentials",
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
});

module.exports = router;
