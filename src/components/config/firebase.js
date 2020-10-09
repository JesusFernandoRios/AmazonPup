import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwn_cf_MhQNaj2RqoGxS9k2z_GpK6w0Vc",
    authDomain: "clone-580b7.firebaseapp.com",
    databaseURL: "https://clone-580b7.firebaseio.com",
    projectId: "clone-580b7",
    storageBucket: "clone-580b7.appspot.com",
    messagingSenderId: "370918997026",
    appId: "1:370918997026:web:472fc5ea1cf31d11f35e7b",
    measurementId: "G-1JF6SW9TH8"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
