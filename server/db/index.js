require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: 'root', //process.env.USER,
  password: ""
});

connection.connect();
module.exports = connection;