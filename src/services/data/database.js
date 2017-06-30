import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCcYiMvFW9tN2c8zze1YZgbzc-DDeryTsM",
    authDomain: "reactjs-demo-43fd0.firebaseapp.com",
    databaseURL: "https://reactjs-demo-43fd0.firebaseio.com",
    projectId: "reactjs-demo-43fd0",
    storageBucket: "reactjs-demo-43fd0.appspot.com",
    messagingSenderId: "720474745045"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;