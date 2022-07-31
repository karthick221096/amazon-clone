// Faced fire base import issue when used like import firebase from 'firebase' so using the 
// below code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDCdWaDP1pjV4RoADRTzmGi3WMxjwIDCU",
    authDomain: "clone-217ce.firebaseapp.com",
    projectId: "clone-217ce",
    storageBucket: "clone-217ce.appspot.com",
    messagingSenderId: "1029148000639",
    appId: "1:1029148000639:web:129c545db483243b081a4a",
    measurementId: "G-X694CS02C4"
  };

// Using this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseapp.firestore();
const auth = firebase.auth();

export {db, auth};