import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';


var config = {
    apiKey: "AIzaSyD0DU-9ow_TqV7BYMB3jgri7XggrZAkROY",
    authDomain: "myloginproject1-221620.firebaseapp.com",
    databaseURL: "https://myloginproject1-221620.firebaseio.com",
    projectId: "myloginproject1-221620",
    storageBucket: "myloginproject1-221620.appspot.com",
    messagingSenderId: "454951817293"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
