import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
//db
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
//auth
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: xxx
  authDomain: xxx
  projectId: "db-testing-7ece7",
  storageBucket: "db-testing-7ece7.appspot.com",
  messagingSenderId: "924173363288",
  appId: "1:924173363288:web:33ac3a3fe8dbf9f301c22d"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

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

