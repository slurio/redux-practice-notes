import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../redux/actions'


class NoteForm extends React.Component {
    

    state = {
        content: ""
    }

    changeHandle = event => {
       this.setState({content: event.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        console.log("Form Props", this.props)
        return (
            <form onSubmit={this.submitHandler}>
                <input type="textarea" value={this.state.content} onChange={this.changeHandle} />
                <input type="submit" value="Add Note" />
            </form>
        )
    }
}

// write to the store
// mapDispatchToProps
const mdp = (dispatch) => {
    //dispatch comes from our store
    //dispatch job: take in an action and then call our reducer and pass that action into the reducer
    return {submitHandler: (noteObj) =>  dispatch(addNote(noteObj))}

}

export default connect(null, mdp)(NoteForm)