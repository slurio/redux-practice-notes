import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../redux/action'


class NoteForm extends React.Component {
    

    state = {
        content: ""
    }

    changeHandle = event => {
       this.setState({content: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.submitHandler(this.state);
        this.setState({content: ""});
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="textarea" value={this.state.content} onChange={this.changeHandle} />
                <input type="submit" value="Add Note" />
            </form>
        )
    }
}

//write to store
const mdp = (dispatch) => {
    //dispatch: take in an action and then call out reducer and pass that action in to the reducer
    return { submitHandler: (note) => dispatch(addNote(note))}
}

export default connect(null, mdp)(NoteForm)