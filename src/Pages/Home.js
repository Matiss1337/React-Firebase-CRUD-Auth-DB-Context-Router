import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { auth } from '../firebase-config'
import { onAuthStateChanged} from 'firebase/auth'
import Crud from "../Crud";
import Img from '../Img';

function Home() {
  onAuthStateChanged(auth, (globalUser) => {
  setGlobalUser(globalUser)
},[])

  ///context is declared then wraped and then called in here, now i can use it
  const {globalUser, setGlobalUser} = useContext(UserContext)
    return (
    <div>
      {/* <Img/> */}
      <Crud/>
    </div>
  )
}

export default Home