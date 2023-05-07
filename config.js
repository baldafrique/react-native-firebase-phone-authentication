import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyD3QBViwbMRZROgXaypzaSuqTdl-yXXPMA",
  authDomain: "login-288f2.firebaseapp.com",
  projectId: "login-288f2",
  storageBucket: "login-288f2.appspot.com",
  messagingSenderId: "55372112046",
  appId: "1:55372112046:web:74b098caac4ee7a5fc0d3f",
  measurementId: "G-NSQ1NWTV1D",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
