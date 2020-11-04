import firebase from 'firebase';

const firebaseConfig={
    apiKey: "AIzaSyCaqgBU9VnTPjthAJyfpOu-rLQHrfuUKkE",
    authDomain: "wireless-buzzer-968c5.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-968c5.firebaseio.com",
    projectId: "wireless-buzzer-968c5",
    storageBucket: "wireless-buzzer-968c5.appspot.com",
    messagingSenderId: "895639828706",
    appId: "1:895639828706:web:2c609fe8c09c7459e5c6bb",
    measurementId: "G-NSXVZFVNZC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.database();