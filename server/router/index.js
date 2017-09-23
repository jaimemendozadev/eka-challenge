const router = require('express').Router();

router.use('/', (req, res) => {
  res.send("<h1>Hit the API Bro!</h1>");
});

module.exports = router;

