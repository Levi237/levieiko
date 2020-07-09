import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from "firebase/app";
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC5RR8DAz7z5QC97UPfsg61U5aCHlLNB0s",
  authDomain: "levieiko-com.firebaseapp.com",
  databaseURL: "https://levieiko-com.firebaseio.com",
  projectId: "levieiko-com",
  storageBucket: "levieiko-com.appspot.com",
  messagingSenderId: "560687419303",
  appId: "1:560687419303:web:46b4771788242575dff082",
  measurementId: "G-PSFLRM85XL"
});
export { firebase as default }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
