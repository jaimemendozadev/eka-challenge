require('dotenv').config();
const app = require('express')();

app.use('/', (req, res)=>{
  res.send("<h1>Hit the api bro!</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});