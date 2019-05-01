//=== DEPENDENCIES ============================================

var express = require("express");
var mysql = require("mysql");
require('dotenv').config;

var PORT = process.env.PORT;

var app = express();

//=== CREATE CONNECTION TO SQL==================================

var connection = mysql.createConnection({
    host: process.env.HOST,
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "seinfeld_db"
  });

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

//=== LISTENER TO START OUR SERVER TO AWAIT REQUESTS===========

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

//=== GET ROUTES================================================

app.get("/", function(req, res) {
    res.sendFile("/app/public/home.html");
});