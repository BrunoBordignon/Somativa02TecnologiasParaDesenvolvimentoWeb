import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDAryUkHu4wtDhWtZByHC6Z6U93g99us-k",
    authDomain: "somativa-02-tecdevweb.firebaseapp.com",
    projectId: "somativa-02-tecdevweb",
    storageBucket: "somativa-02-tecdevweb.appspot.com",
    messagingSenderId: "385117863607",
    appId: "1:385117863607:web:da47b0ea59926195c75732"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;