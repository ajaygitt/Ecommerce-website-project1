var express = require('express');
const { response } = require('../app');
var router = express.Router();
var userHelper=require('../helpers/user-helper')
var connection=require('../config/connection')

/* GET home page. */
router.get('/', function(req, res, next) {
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


//register or signup new user
router.post('/signup', function(req, res, next) {
userHelper.doSignUp(req.body).then((data)=>{
  res.render('login')
})
});

//user login

router.post('/login',(req,res)=>{
  userHelper.doLogin(req.body).then((response)=>{
    if(response.status){
      res.redirect('/')
    }
    else{
      res.redirect('/loginpage')
    }
  
  })

})







module.exports = router;
