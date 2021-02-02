var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index',{admin:true})
});


router.get('/admin/adminhome', function(req, res, next) {
  res.render('admin/adminlogin',{admin:true})
});

module.exports = router;
