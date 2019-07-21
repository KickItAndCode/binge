import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDYLibrgr9O139Y1hhfjQP86_93nXcO3aQ",
    authDomain: "binge-c7835.firebaseapp.com",
    databaseURL: "https://binge-c7835.firebaseio.com",
    projectId: "binge-c7835",
    storageBucket: "binge-c7835.appspot.com",
    messagingSenderId: "1094262396154",
    appId: "1:1094262396154:web:0c793569d8ddb70f"
};


firebase.initializeApp(config);

const firebaseDB = firebase.database();

export {
    firebase,
    firebaseDB
}