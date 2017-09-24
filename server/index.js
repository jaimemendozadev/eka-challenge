require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', router);



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});