import React, { useContext} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from './UserContext'
import { auth } from './firebase-config'
import {signOut} from 'firebase/auth'

function Nav() {
const logout = async ()=> {
  await signOut(auth)
}
const {globalUser, setGlobalUser} = useContext(UserContext)
let navigate = useNavigate()
  return (
    <div className="nav">
<a onClick={()=> {navigate("/")}}>Home</a>
<div>
{globalUser ? <button onClick={logout}>Log Out</button>: null}
{globalUser ? <a onClick={()=> {navigate("/account")}}>{globalUser?.email}</a>: <a onClick={()=> {navigate("/login")}}>Log In / Register</a>}
</div>



    </div>
  )
}

export default Nav