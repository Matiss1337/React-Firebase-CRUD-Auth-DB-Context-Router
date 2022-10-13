import React, { useState, useEffect, useContext} from "react"
import { UserContext } from '../UserContext'
import { signInWithGoogle, auth } from '../firebase-config'
import { createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

function LogIn() {
const {globalUser, setGlobalUser} = useContext(UserContext)

onAuthStateChanged(auth, (globalUser) => {
  setGlobalUser(globalUser)
})

// everytime state changes it updates user 

const [registerEmail, setRegisterEmail] = useState("")
const [registerPassword, setRegisterPassword] = useState("")
const [loginEmail, setLoginEmail] = useState("")
const [loginPassword, setLoginPassword] = useState("")

const register = async ()=> {
  try {
await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  } catch ( error ) {
    console.log(error.message)
  }
}

const login = async ()=> {
    try {
 await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  } catch ( error ) {
    console.log(error.message)
  }
}

const logout = async ()=> {
  await signOut(auth)
}
  return (
    <div>
        <div>
          <h3>Register</h3>
          <input placeholder='Email' onChange={(event) => {setRegisterEmail(event.target.value)}}/>
          <input placeholder='Password' onChange={(event) => {setRegisterPassword(event.target.value)}}/> 
          <button onClick={register}>Register</button>
        </div>
         <div>
          <h3>Log in</h3>
          <input placeholder='Email' onChange={(event) => {setLoginEmail(event.target.value)}}/>
          <input placeholder='Password' onChange={(event) => {setLoginPassword(event.target.value)}}/>
          <button onClick={login}>Log in</button>
        <div>
        <button onClick={signInWithGoogle}>sign in with Google</button>
        </div>
        </div>

        <h4>User logged in:{globalUser?.email}</h4>
        <button onClick={logout}>Log Out</button>


    </div>
  )
}

export default LogIn
