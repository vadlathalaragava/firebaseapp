import Firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyBerZMXqpE5JT8w4SYeq4QLH0lTWeGYflU",
    authDomain: "fir-demo-ff967.firebaseapp.com",
    databaseURL: "https://fir-demo-ff967.firebaseio.com",
    projectId: "fir-demo-ff967",
    storageBucket: "fir-demo-ff967.appspot.com",
    messagingSenderId: "971210944908"
};

let app = Firebase.initializeApp(config);
export const db = app.database();