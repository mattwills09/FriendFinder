//=== DEPENDENCIES ============================================

var express = require("express");
var mysql = require("mysql");
require('dotenv').config;

var PORT = process.env.PORT;

var app = express();

//=== GET ROUTES================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});