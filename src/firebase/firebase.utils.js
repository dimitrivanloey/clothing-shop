import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIbIe2rAmmOLESDg9z1S8JCdclUoDh5Pc",
    authDomain: "shop-db-3546a.firebaseapp.com",
    projectId: "shop-db-3546a",
    storageBucket: "shop-db-3546a.appspot.com",
    messagingSenderId: "142829857891",
    appId: "1:142829857891:web:317f3e13aa1a1586641c56",
    measurementId: "G-4S8DTJE3PC"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

