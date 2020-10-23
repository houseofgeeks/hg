const sendEmail = require('../util/sendEmail')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    message: 'index'
  })
});

router.post('/contact', (req, res, next) => {
  sendEmail(req.body)
    .then(() => {
      res.status(200).json({message: 'Sent'});
    })
    .catch(err => {
      res.status(500).json({message: 'Not sent'});
    })
})

module.exports = router;
