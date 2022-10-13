import React from 'react'
import { useParams } from "react-router-dom"
import Crud from "../Crud";

function Account() {
    let { user } = useParams()
    // super useful to grab variable. like postMessage, user or comment 
  return (
    <div>
        <h1>welcome to your Profile Page</h1>
        <Crud/>
        <h1>{user}</h1>
    </div>
  )
}

export default Account