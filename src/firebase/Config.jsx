import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect } from "react";

const config = firebase.initializeApp({
  apiKey: "AIzaSyCWz2142Zi5lKeNw7hQF-cI8wyT_RAnUaQ",
  authDomain: "my-you-tube-d954a.firebaseapp.com",
  projectId: "my-you-tube-d954a",
  storageBucket: "my-you-tube-d954a.appspot.com",
  messagingSenderId: "23238931562",
  appId: "1:23238931562:web:d80f521c8857e8482d4613",
  measurementId: "G-NV0RG2YSTF",
});

export const auth = firebase.auth();

/**GOOGLE AUTH INTEGRATION CODELARI */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;
