# FriendFinder

This is the FriendFinder Social App.

It was completed for the Eleventh Homework for the Coding Boot Camp.

It is a full-stack site that takes in results from users' surverys, compares their answers to the answers of other users, and then returns the name and picture of the best overall match.

This app renders the home page and the survey page in HTML, with Bootstrap CSS. It then uses Express to GET all the friends objects from  the friends array where all previous users names, images, and answers are stored. After the current user submits their survey answers, the app opens a POST request to the friends api. The most recently submitted user information is temporarily stored in a variable which is then compared to all other user information objects until the "best match" is found. The comparison is done by looping through the friends api array and then every object within that array, comparing survery answers and finding the user the has the smallest absolute difference in values for survery answers. The "best match" is then returned to the front-end and displayed to the most recent user as a modal that shows the best match's image and name.