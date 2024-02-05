
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCAY2U3c3M8Wn78xQhtWKASm3R1xGsOX4",
    authDomain: "app-2ef59.firebaseapp.com",
    projectId: "app-2ef59",
    storageBucket: "app-2ef59.appspot.com",
    messagingSenderId: "431023157697",
    appId: "1:431023157697:web:f14c22bf5e6acbf0393f40",
    measurementId: "G-E5HHYHF90V"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = getAuth(app);

// The latest update for auth with db
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
