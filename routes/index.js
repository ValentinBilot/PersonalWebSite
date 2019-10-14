var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Valentin BILOT' });
});

router.get('/cv', function(req, res, next) {
  res.render('CV');
});

router.get('/chordsgenerator', function(req, res, next) {
  res.render('chordsgenerator');
});

router.get('/drumloopsgenerator', function(req, res, next) {
  res.render('drumloopsgenerator');
});

router.get('/asc', function(req, res, next) {
  res.render('asc');
});

router.get('/music', function(req, res, next) {
  res.render('music');
});



router.get('/firstOSC', function(req, res, next) {
  res.render('firstOSC');
});

module.exports = router;
