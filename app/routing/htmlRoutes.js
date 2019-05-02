
//=== DEPENDENCIES ============================================

var express = require("express");
var path = require("path");
require('dotenv').config;

// var friends = ("../data/friends");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=== GET ROUTES================================================

app.use(

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
    
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});