import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
//db
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
//auth

const firebaseConfig = {
    apiKey: "AIzaSyD7nZANPyFMLIKQWBqLEAtErWzNWdab-0c",
    authDomain: "crud-practice-19f8b.firebaseapp.com",
    projectId: "crud-practice-19f8b",
    storageBucket: "crud-practice-19f8b.appspot.com",
    messagingSenderId: "381962122299",
    appId: "1:381962122299:web:19d332dc966f713f83181e",
    measurementId: "G-B59XH77L9J"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//actualy adds db to app

export const auth = getAuth(app)
//actualy adds auth to app

const provider = new  GoogleAuthProvider()
//the way you want to log in

export const signInWithGoogle = async () => {
    try {
 await signInWithPopup(auth, provider)
  } catch ( error ) {
    console.log(error.message)
  }
}
/// when called there will be a popup and ask us to sign in


// export const signInWithGoogle = () => {signInWithPopup(auth, provider).then((result) => {
// should be like this and then use . then on other pages




// also u can use auth to work with person authonticated already
//person loged in

