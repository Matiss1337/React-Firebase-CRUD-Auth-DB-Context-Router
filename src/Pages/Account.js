import React, { useState, useEffect, useContext} from "react"
import { UserContext } from '../UserContext'

function Account() {
  const {globalUser, setGlobalUser} = useContext(UserContext)
  return (
    <div>
        <h1>welcome to your Profile Page</h1>
        <h1>{globalUser?.email}</h1>
        <h1>{globalUser?.uid}</h1>
    </div>
  )
}

export default Account