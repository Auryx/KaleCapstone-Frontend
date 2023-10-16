# KaleCapstone 

Welcome! I plan on using Docker to redo a version of Project 3 or 4. 
## Project Idea

Current plan is to build a app that helps you track which movies you have and haven't seen, while providing info like Lead Actors, Release Date, and their Worldwide gross. If a better idea strikes me, I'll probably pivot, but this idea will do in a pinch. 

## Backend Endpoints
| ENDPOINT | METHOD | PURPOSE |
|----------|--------|---------|
| /movies | GET | To display all movies in the user's index |
| /movies/create | GET | Display a form to add a new movie |
| /movies | POST | Add the movie to the database from the form, and redirect to /movies |
| /movies/:id | GET | Display the info about a specific movie |
| /movies/:id | GET | Display a form to edit a designated existing movie |
| /dice/update/:id | PUT | Update a designated movie's information then redirect to /movie |
| /dice/delete/:id | DELETE | Delete a designated movie then redirect to /movie  |
