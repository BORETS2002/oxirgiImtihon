// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgsA5Wpl6q56ClWIuSdBW9d4nGHnn8bNk",
  authDomain: "fir-69628.firebaseapp.com",
  projectId: "fir-69628",
  storageBucket: "fir-69628.appspot.com",
  messagingSenderId: "985635121295",
  appId: "1:985635121295:web:f8f9d5bb3ed7c117e1a8fa",
  measurementId: "G-77X07CGQ3E",
};

firebase.initializeApp(firebaseConfig);

const firebase = firebase.initializeApp();
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopur(provider);

export default firebase;
