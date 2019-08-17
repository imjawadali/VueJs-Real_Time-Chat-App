import firebase from 'firebase/app';
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore';

// config Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBlX3q-LWpp_i-CORDDhl-rbbwHf8YdShw",
    authDomain: "chat-app-62426.firebaseapp.com",
    databaseURL: "https://chat-app-62426.firebaseio.com",
    projectId: "chat-app-62426",
    storageBucket: "chat-app-62426.appspot.com",
    messagingSenderId: "54600955407",
    appId: "1:54600955407:web:9bfca26e3782f698"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore();