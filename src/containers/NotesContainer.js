import React from 'react';
import { connect } from 'react-redux';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import { getNotes } from '../redux/actions'



class NotesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
    }

    renderNotes = () => {
        return this.props.notes.map((note, index) => <Note key={index} note={note} />)
    }

    render () {
        console.log("Note Container Props:", this.props)
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

//reader action
//job to accept current state that lives inside our store and tell what state belongs to NotesContainer 
const msp = (state) => {
    console.log('current Redux state in NotesContainer', state)
    return {notes : state.notes}
}

//write action

const mdp = (dispatch) => {
    return {fetchNotes: () => dispatch(getNotes())}
}

export default connect(msp, mdp)(NotesContainer);