# Friend Finder Compatibility App
___

For this application, a social media type compatibility app was created using HTML, JavaScript, Bootstrap, Routes, Node JS, Express for the site, and Heroku for the app hosting.  There was also a gitHub repository made, and in the page footer links are provided to access the API Friends List and the GitHub repository.  The app is modeled off of social media, and is basically a Friend Compatibility Finder that will allow users to complete a simple survey, and then by using that information on the back end, the user will be matched with a friend (or user) that has the most similar answers in terms of values.  The scores are recorded from the survey form in an array, and then using the differences of each score (value) in each array, was matched with the user using the least amount of difference in their scores as the deciding factor (confusing I know hah).

Completing the pages, 'home.html' and 'survey.html', were fairly easy using HTML, Bootstrap, and past examples provided.  But some problems I had were mainly typos in collecting the values of each drowdown answer, but those were easily rectified with Bryan and Aaron's help.  Also, the modal box at the bottom of the 'survey' page did take a little tinkering to have it show properly and look correctly.  Simply re-writing the code for the modal using the Bootstrap site corrected that.

In the server.js file was where most of the bugs arose, as you can imagine.  However, requiring express and path, connecting to the server port, and adding the server listener were the easy parts to add in using our past exercises.  The same can be said regarding the addition of the app.get and app.post routes.  Then the main problems came up in the server.js file and the functions and loops inside the post route, bascailly the ones that would take each answer array (hard coded and added by the new user), and then parseing that array, totalling the entire value array, compare it with each previously added user's array, getting the index of each array, and then matching the user with the correct friend index value to the new user that would be most similar, or had the least difference between the values.  I received help from Bryan in setting up the beginning of this, used a number of sites online to try and get it working, but was only able to get the main structure of the code down.  Sitting with a colleague after class helped me out the most in being able to have someone walk through each part of the functions and go through the code to have it work the way it needed to.

The other addition to the site was making sure that each pre-added and user added array would be posted to the API/friends as an object (that is also provided in the screenshots below).  In the end, the site did function as required, with diffent types of answer giving me different friend matches, as I had added five friend arrays to be the starting point.  I did try to research and use app.use, however, I was not able to get that working before the submission time.  I was able to have the server connect and read, but could not get the pages to connect when I split up the routes and code.  There will also be a screenshot added of the code I was using the bug I was getting.  I also plan to talk to Bryan or one of my other colleagues tomorrow more regarding the use and implementation of the Use route.
___
Working Screenshots:
![friend-finder-server](images/friend-finder-server.jpg)
___
![friend-finder-api-friends-list](images/friend-finder-api-friends-list.jpg)
___
![friend-finder-home](images/friend-finder-home.jpg)
___
![friend-finder-survey-modal](images/friend-finder-survey-modal.jpg)
___
app.Use bug screenshot:
![friend-finder-getUseBugs](images/friend-finder-getUseBugs.jpg)

## Built With

* [HTML]
* [JavaScript]
* [Bootstrap]
* [jQuery]
* [Node JS]
* [Express JS]
* [Heroku](https://warm-island-74595.herokuapp.com/) - For public hosting

## Authors

* **Matt Williams** - *Initial work* - [M Williams Portfolio](https://mattwills09.github.io/portfolio.html)
