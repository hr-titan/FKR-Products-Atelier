const express = require("express");
require('dotenv').config();
const router = require("./routes.js");
const morgan = require('morgan');
// const path = require("path");

const app = express();
app.use(express.json());
app.use(morgan('tiny'))
// app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})