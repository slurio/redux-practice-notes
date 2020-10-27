import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = (currentState = {notes: []}, action) => { 
  if (action.type === "add note") {
    return { ...currentState, notes: [...currentState.notes, action.payload] }
  } else if (action.type === "add_notes_from_fetch") {
    return { ...currentState, notes: action.payload}
  } else {
    return currentState
  }
}
//reducer is a function that returns a state object
const store = createStore(rootReducer, applyMiddleware(thunk)) 

console.log("Store", store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


