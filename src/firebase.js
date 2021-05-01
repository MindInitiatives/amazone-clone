import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfCqcnhGgqyeh1WMQShbmn9r-cp-dNLUY",
    authDomain: "clone-aacfe.firebaseapp.com",
    projectId: "clone-aacfe",
    storageBucket: "clone-aacfe.appspot.com",
    messagingSenderId: "642874377446",
    appId: "1:642874377446:web:b20bda417b6f132e0f6727"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};