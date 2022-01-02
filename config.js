import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDWXWI4_F_Qtfw_Q8U4GqT2T_EMajvC3ss",
    authDomain: "proj71-bf6a0.firebaseapp.com",
    projectId: "proj71-bf6a0",
    storageBucket: "proj71-bf6a0.appspot.com",
    messagingSenderId: "625599698106",
    appId: "1:625599698106:web:ebc49d7869414b2e3e1e83",
    measurementId: "G-325W5D0BY3"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


