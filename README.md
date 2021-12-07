# NETFOX APP
-------------------------------------------

# Description: 
* NETFOX is a web application provides the user with the abality to search for movies, series and games to get some detailed informations about them. 

![Capture](https://user-images.githubusercontent.com/90429106/145089110-23cebb42-06bc-4547-a719-9fe8440c9932.PNG)

-------------------------------------------
# Demo:
* https://obazbooz.github.io/APIs-Movies-app/

-------------------------------------------
# How To Use:
- It's easy application to use you can clone the repo to your device, then you can run the index.html file.
- You can now use the application to search for informations like (Title, Release year, Movie type,Actors and more..) about movies and series even you can search for games.
- To performe the search you can type the title that you want to lookf or in the search field.
- After typing the you words you can see then a list of suggestions matching your searched keywords. 
- Now you can get the detailed information by clicking on one of the results posters.

-------------------------------------------
# Structure:
![Capture](https://user-images.githubusercontent.com/90429106/145100126-47caeaec-62d3-491e-b6d5-03d456d7c873.PNG)

public: Contains the images and the styling file

src: Contains the javascript code splits into set of subfolders as following:

init: it contains initializer file which responsable to creat the default DOM elements which going to be visible to the user on loading.

listeners: it contains moviesListeners file which trigger the fetching and populating functions in the view file.

util: it contains two files, fetchData file which responsable to fetch the API using axios. The other file support has a simple function support a sliding future in the project.

views: Contains views file which responsable for creating and manipulating DOM elements accourding to the user interaction.

index.html: It's the single webpage that we have to run the application.

