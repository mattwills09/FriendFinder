//=== DEPENDENCIES ============================================

var express = require("express");
var mysql = require("mysql");
require('dotenv').config;

var PORT = process.env.PORT;

var app = express();

//=============================================

// $(document).ready(function() {
//     $("#submit").on("click", function(event) {
//         event.preventDefault();

//         var valid = true;
//         if ($("#name").val() === "" || $("#photo").val() === "") {
//             valid = false;
//         }
//         else if ($("q1".val() === "empty" || "q1".val() === "empty" ||"q1".val() === "empty" ||"q1".val() === "empty" ||"q1".val() === "empty" ||"q1".val() === "empty" ||"q1".val() === "empty" ||"q1".val() === "empty" ||"q1".val() === "empty" ||"q1".val() === "empty")) {
//                 valid = false;
//         }
    
//         if (valid === true) {
//             var newFriend = {
//                 name: $("#name").val().trim(),
//                 photo: $("#photo").val().trim(),
//                 scores: [
//                     $("#q1").val(),
//                     $("#q2").val(),
//                     $("#q3").val(),
//                     $("#q4").val(),
//                     $("#q5").val(),
//                     $("#q6").val(),
//                     $("#q7").val(),
//                     $("#q8").val(),
//                     $("#q9").val(),
//                     $("#q10").val(),
//                 ]
//             };

//     $.post("http://localhost:8000/api/friends", newFriend, function(data) {
//         $("#bestMatch").text(data.name);
//         $("#bestMatchPic").attr("src", data.photo);
//         $("#bestMatchModal").modal("toggle");
//     });
//         }
//         else {
//             alert("Please fill out ALL fields!");
//         }

//     });
// });

// </script>