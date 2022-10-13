import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../UserContext'
// so i can use links and travaverse my website 

function Home() {
  ///context is declared then wraped and then called in here, now i can use it
  const {globalUser, setGlobalUser} = useContext(UserContext)
    let navigate = useNavigate()
    ///import the hook, define it as constsant and then call in onClick with target link
  console.log(globalUser)
    return (
    <div>
      <h1>welcome</h1>
    <h2>{globalUser?.email}</h2>
    </div>
  )
}

export default Home