var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/sent/:uName' , function(req,res,next) {
    res.render('sent',{userName: req.params.uName,email: req.param.uName});
});

router.post('/sent/sumbit', function(req,res,next) {
   res.redirect('/test/...');
});

module.exports = router;
