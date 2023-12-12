require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.USER,
  password: process.env.PASSWORD
});

connection.connect();
module.exports = connection;