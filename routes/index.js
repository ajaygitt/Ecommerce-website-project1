var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

// let gadget=[
//   {
//     name:"oppo",
//     model:"any"

//   },
//   {
//     name:"oppo",
//     model:"any"

//   },
//   {
//     name:"oppo",
//     model:"any"

//   }
// ]


  res.render('index');


});



//to login page

  router.get('/signuppage', function(req, res, next) {
    res.render('signup');
});

//to signup page

router.get('/loginpage', function(req, res, next) {


  res.render('login');



});


module.exports = router;
