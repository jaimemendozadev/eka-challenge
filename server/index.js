require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.resolve(__dirname, '../public')));


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});