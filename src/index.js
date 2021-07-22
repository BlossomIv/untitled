import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State from './state/state';
import firebase from 'firebase';
import 'firebase/firebase-firestore';

// Initialize Firebase
firebase.initializeApp(
    {
        apiKey: "AIzaSyDbQ2wmknwfDJW8ImW4gIAExpOE1DBz_jk",
        authDomain: "chat-react-e4631.firebaseapp.com",
        projectId: "chat-react-e4631",
        storageBucket: "chat-react-e4631.appspot.com",
        messagingSenderId: "1138521696",
        appId: "1:1138521696:web:e192ec48795b02c01c7505",
        measurementId: "G-BPC9DVZD9N"
    }
);

export const Context = createContext(null)
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
      firebase,
      firestore,

      State
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

