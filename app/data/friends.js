
//=== DEPENDENCIES ============================================

var express = require("express");
var path = require("path");
require('dotenv').config;

// var friends = ("../data/friends");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=============================================

