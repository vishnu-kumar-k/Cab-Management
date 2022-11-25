// Import the functions you need from the SDKs you need
import fire from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyDz0OuhxDtWvT9XrxYXrY7E2XOo7UgE6Ww",
  authDomain: "drive-3d71e.firebaseapp.com",
  databaseURL: "https://drive-3d71e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "drive-3d71e",
  storageBucket: "drive-3d71e.appspot.com",
  messagingSenderId: "853529338505",
  appId: "1:853529338505:web:c0bc6c60f488f5afda5c58",
  measurementId: "G-W31M1YC0TQ"
};

// Initialize Firebase
const f=fire.initializeApp(firebaseConfig);

export const db=f.firestore();



// const analytics = getAnalytics(fire);
export const auth = getAuth(f);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // const name = result.user.displayName;
      // const email = result.user.email;
      // const profilePic = result.user.photoURL;

      // localStorage.setItem("name", name);
      // localStorage.setItem("email", email);
      // localStorage.setItem("profilePic", profilePic);
      // <h1>{localStorage.getItem("name")}</h1>
      // <h1>{localStorage.getItem("email")}</h1>
      // <img src={localStorage.getItem("profilePic")} />
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fire;
