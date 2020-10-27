import React from 'react';
import Note from '../components/Note';


class NotesContainer extends React.Component {
    state = { notes: [] }

    componentDidMount() {
        fetch("http://localhost:3000/notes")
        .then(resp => resp.json())
        .then(data => this.setState({
            notes: data
        }))
    }

    renderNotes = () => {
        return this.state.notes.map((note, index) => <Note key={index} note={note} />)
    }

    render () {
        return (
            <ul>
                {this.renderNotes()}
            </ul>
        )
    }
}

export default NotesContainer;