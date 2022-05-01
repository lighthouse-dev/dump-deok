// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { FIREBASE } from '../env';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

export { initFirebase, signInWithGoogle };
