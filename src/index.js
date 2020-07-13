import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from "firebase/app";
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "levieiko-com.firebaseapp.com",
  databaseURL: "https://levieiko-com.firebaseio.com",
  projectId: "levieiko-com",
  storageBucket: "levieiko-com.appspot.com",
  messagingSenderId: "560687419303",
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
});
const storage = firebase.storage();
export { storage, firebase as default }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
