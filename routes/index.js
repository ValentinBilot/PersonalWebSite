var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cv', function(req, res, next) {
  res.render('CV');
});

router.get('/firstOSC', function(req, res, next) {
  res.render('firstOSC');
});

module.exports = router;
