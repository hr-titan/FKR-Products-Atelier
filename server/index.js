const express = require("express");
// import mysql from "mysql2";
// const controllers = require("./controllers.js");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// app.use('/', router);

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);