import React, { useState, useContext} from "react"
import {ref, getDownloadURL} from "firebase/storage"
import {storage } from './firebase-config';
import { UserContext } from './UserContext'
import { db} from './firebase-config';
import {doc, deleteDoc} from 'firebase/firestore'



function Card({props}) {
const{globalUser, setGlobalUser} = useContext(UserContext) 
const[imgUrl, setImgUrl] = useState("https://img.autobytel.com/chrome/multiview/white/640/2022hyc03_640/2022hyc030017_640_01.jpg")

const url = "images/"+props.photo
getDownloadURL(ref(storage, url))
  .then((url) => {setImgUrl(url)
  })


const rerenderPage=()=>{window.location.reload(true)}
const deleteUser = async (id)=> {
//need to reference entry just like for update
const userDoc = doc(db, "cars", id)
await deleteDoc(userDoc)
rerenderPage()
}

  return (
  <div className="carCard" key={props.id}>
  <img src={imgUrl}/>
  <h1>Model :{props.name}</h1>
  <h2>Price :{props.price} €</h2>
  <h3>Year :{props.year}</h3>
  <h3>Info :{props.info}</h3>
  <h3>Telephone :{props.tel}</h3>
  <h3>{props.email}</h3>
  <h3>location</h3>
  {props.uid === globalUser?.uid ? <button onClick={()=>{deleteUser(props.id)}}>Delete car</button>: null}
  
  </div>
  )
}

export default Card

// '"images/8.jpgkTdjpwwJA2Rhg1buAL4VcvEkLg03"'