# KaleCapstone 
By: Paul Bunda

## Movie Tracker
This app is a very basic movie tracker that catalogs movies with a Django backend. The app will display a saved movie's title, lead actor, release date, parental guidance rating, and a short synopsis of said movie. The primary purpose of this app was to learn Docker, as seen in the Dockerfile. The app is deployed using a docker container and the Heroku CLI.  

### Links
[**Deployment**](https://intense-forest-85466-8a4e6faec164.herokuapp.com/)
[**Backend**](https://stormy-journey-78172-5e031ccea3dc.herokuapp.com/movies/)
[**Backend Github**](https://github.com/Auryx/KaleCapstone-Backend)

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

## ERD
``` mermaid
erDiagram
    DiceSet {
        id string 
        title string
        leadActor string
        release string
        pgRating string
        synopsis string
    }

```
## Future Improvements
- Implement Auth
- Revise object, add binary Watched, and sort index by obj
- More styling
