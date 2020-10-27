import React from 'react';
import Note from '../components/Note';
import {connect} from 'react-redux';
import NoteForm from '../components/NoteForm';
import { getNotes } from '../redux/action'

class NotesContainer extends React.Component {
    // state = { notes: [] }

    componentDidMount() {
        this.props.fetchNotes()
    }

    renderNotes = () => {
        return this.props.notes.map((note, index) => <Note key={index} note={note} />)
    }

    render () {
        console.log("Container Props:", this.props)
        return (
            <>
            <NoteForm />
            <ul>
                {this.renderNotes()}
            </ul>
            </>
        )
    }
}

//read action
const msp = (state) => {
     return {notes: state.notes }
}

//write action
const mdp = (dispatch) => {
    return {fetchNotes: () => dispatch(getNotes())}
}

export default connect(msp, mdp)(NotesContainer);