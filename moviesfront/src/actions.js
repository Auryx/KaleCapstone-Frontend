import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "http://stormy-journey-78172-5e031ccea3dc.herokuapp.com/movies/"

//createAction => create a todo from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newMovie = {
        title: formData.get("title"),
        leadActor: formData.get("leadActor"),
        pgRating: formData.get("pgRating"),
        release: formData.get("release"),
        synopsis: formData.get("synopsis")
    }

    // send request to backend
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMovie)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get todo id
    const id = params.id

    // construct request body
    const updatedMovie = {
        title: formData.get("title"),
        leadActor: formData.get("leadActor"),
        pgRating: formData.get("pgRating"),
        release: formData.get("release"),
        synopsis: formData.get("synopsis")
    }

    // send request to backend
    await fetch(URL + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMovie)
    })

    // redirect back to show page page
    return redirect(`/${id}`)
}

//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get todo id
    const id = params.id

    // send request to backend
    await fetch(URL + id, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}
