//=== DEPENDENCIES ============================================

var express = require("express");
var mysql = require("mysql");
require('dotenv').config;

var PORT = process.env.PORT;

var app = express();

//=== GET ROUTES================================================

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req, res) {
    var friendSurvey = req.body;
    console.log(friendSurvey);
});