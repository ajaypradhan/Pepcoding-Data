import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC_CgBOpXuiwU2yrXonDzRM5SnH9V8tvn4',
    authDomain: 'reels-1421c.firebaseapp.com',
    projectId: 'reels-1421c',
    storageBucket: 'reels-1421c.appspot.com',
    messagingSenderId: '421363465846',
    appId: '1:421363465846:web:dbfb2558e1907a70b8e957',
    measurementId: 'G-9E106VBFR1',
};

firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export default firebase;
