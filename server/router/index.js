const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("<h1>Hit the API Bro!</h1>");
});

router.post('/form/:num', (req, res) => {
  console.log("req.params are", req.params.num);
  res.send(`got req.params ${req.params.num}`);
});

module.exports = router;

