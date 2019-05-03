
//=== DEPENDENCIES ============================================

var express = require("express");
var path = require("path");
require('dotenv').config;

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=== LISTENER TO START OUR SERVER TO AWAIT REQUESTS===========
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

//=============================================

app.use(function (req, res, next, reducer, event) {
    console.log('Time: %d', Date.now());
});

$(document).ready(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();

        // === VALIDATION==============
        var valid = true;
        if ($("#name").val() === "" || $("#photo").val() === "") {
            valid = false;
        }
        else if ($("#q1").val() == "" || $("#q2").val() == "" || $("#q3").val() == "" || $("#q4").val() == "" || $("#q5").val() == "" || $("#q6").val() == "" || $("#q7").val() == "" || $("#q8").val() == "" || $("#q9").val() == "" || $("#q10").val() == "") {
          
            valid = false;
        }
    
        if (valid == true) {
          var newFriend = {
              name: $("#name").val().trim(),
              photo: $("#photo").val().trim(),
              scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val(),
              ]
            };

            $.post("http://localhost:8000/api/friends", newFriend)
              .then(function(data) {
              // console.log(data);

              $("#bestMatchModal").modal("toggle");
              $("#bestMatch").html(data.name);
              $("#bestMatchPic").attr("src", data.photo);
            });
        }
        else {
            alert("Please fill out ALL fields!");
        }

    });
});