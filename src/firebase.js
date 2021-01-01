import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2EeuViLwH5f2_0op-w6PryIeDO0Bsxt4",
  authDomain: "ideaboxlive-e608a.firebaseapp.com",
  projectId: "ideaboxlive-e608a",
  storageBucket: "ideaboxlive-e608a.appspot.com",
  messagingSenderId: "1022616628898",
  appId: "1:1022616628898:web:debcae8276ef106673b1fb"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };
