

// export  const addNote = (noteObj) => ({type: "add note", payload: noteObj})

export const addNote = (noteObj) => {
    console.log(noteObj)
    return function(dispatch) {

        let options = {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify(noteObj)
        }

        fetch("http://localhost:3000/notes", options)
        .then(resp => resp.json())
        .then(note => dispatch({ type: "add note", payload: note}))
    }
}

export const getNotes = () => {
    console.log('first dispatch invoked')
    return function(dispatch) {
        console.log('nested function invoked')
        fetch("http://localhost:3000/notes")
        .then(resp => resp.json())
        //How do we send data to our reducer function??
        // by using dispatch
        .then(data => dispatch({ type: "fetched notes", payload: data }))
    }
}