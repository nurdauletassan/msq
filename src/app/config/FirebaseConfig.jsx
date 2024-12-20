import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApxWccEJ8Qx-tE-3aJDu6Sxi-WoAuE9Xw",
  authDomain: "e-commerce-c81cf.firebaseapp.com",
  projectId: "e-commerce-c81cf",
  storageBucket: "e-commerce-c81cf.appspot.com",
  messagingSenderId: "1032539434337",
  appId: "1:1032539434337:web:ab1baad49adcbcc1cc2920",
  measurementId: "G-BW54PQ0C3K",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export default db;
