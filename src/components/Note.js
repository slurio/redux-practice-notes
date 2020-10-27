import React from 'react'

function Note({ note }) {
    return (
        <li>
            <p>{note.content}</p>
        </li>
    )
}

export default Note; 