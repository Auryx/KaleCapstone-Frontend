// YOUR DEPLOYED API BASE URL
const URL = "https://stormy-journey-78172-5e031ccea3dc.herokuapp.com/movies/"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL)
    const movies = await response.json()
    return movies
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `${params.id}/`)
    const movie = await response.json()
    return movie
}
