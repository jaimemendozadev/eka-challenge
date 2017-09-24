const router = require('express').Router();
const User = require('../db/models/user.js');

router.get('/', (req, res) => {
  res.send("<h1>Hit the API Bro!</h1>");
});

router.post('/form/:num', (req, res) => {
  console.log("req.params are", req.params.num);
  res.send(`got req.params ${req.params.num}`);
});


router.post('/create-test-user', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  new User({
    username,
    password,
    email
  })
  .save()
  .then((save)=>{
    res.json({save});
  })
  
});

module.exports = router;

