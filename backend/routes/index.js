var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    message: 'index'
  })
});

router.get('*', function(req, res){
  res.status(500).json('bad request or 404 not found');
});
module.exports = router;
