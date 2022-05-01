// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  PhoneAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

import { FIREBASE } from '../env';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSAGING_SENDER_ID,
  appId: FIREBASE.APPID,
  measurementId: FIREBASE.MEASUREMENT_ID
};

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);

const firebaseAuthUI =
  firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(getAuth());

const firebaseAuthUIConfig = {
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
    PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ]
};

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, googleProvider)
    .then(res => {
      console.log(res.user);
    })
    .catch(error => {
      console.log(error.message);
    });
};

export { initFirebase, firebaseAuthUI, firebaseAuthUIConfig, signInWithGoogle };
