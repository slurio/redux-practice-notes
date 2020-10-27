export const addNote = (note) => ({ type: "add note", payload: note })

export const getNotes = () => {
    console.log("first dispatch invoked")
    return function (dispatch, getState) {
        console.log("nested function invoked get state: ", getState())
        fetch("http://localhost:3000/notes")
        .then(resp => resp.json())
        //How do we send data to our reducer function?
        //By using dispatch
        .then(data => dispatch({type: "add_notes_from_fetch", payload: data}))
    }

}

// data => dispatch({type: "add_notes_from_fetch", payload: data})