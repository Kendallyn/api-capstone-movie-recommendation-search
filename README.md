# api-capstone-movie-search
Choose API in JSONP format
Test to make sure API works

Taste-dive Movie Search
267623-Thinkful-76WV9F3O
Using this key, you can perform 150 requests per hour.
quote 150
https://tastedive.com/read/api


Create HTML and CSS to ensure everything is where it should be before JavaScript/jQuery is added

https://tastedive.com/read/api
Questions:
-The returned object contains, under the Similar key, the item(s) that were searched for (a list in the Info key) and the recommended items (a list in the Results key). Each item in a list has the Name and Type keys. The type can be music, movie, show, book, author or game.

parameters type says it can be one of the following, if not specified will get mixed results, can i have it be a movie and tv search app?

When verbose=1 in the request, each item can also contains the following additional keys:
wTeaser: item description  //where/how does this get added in? JS?

UserFlow Write Up
-User will see first page with title, description, and search box
-User will user search box to type in a type of movie, movie title, or maybe tv show?
-User will use submit button to search
-User will get results of search for movies in the category they searched for with a description and an image
-Search bar and submit button will stay present so user is able to search again instantly
