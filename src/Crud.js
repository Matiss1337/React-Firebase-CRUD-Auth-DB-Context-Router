import React, { useState, useEffect, useContext} from "react"
import { db, storage } from './firebase-config';
import { UserContext } from './UserContext'
import Card from "./Card";
import {v4} from "uuid"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'
// getDocs for receiving db and addDoc to add them, doc being an db entry
// updaateDoc is for updating, doc allows to create an instance of a document
// deleteDoc for deleting

function Crud() {
const {globalUser, setGlobalUser} = useContext(UserContext)
const [cars, setCars] = useState([])
const usersCollectionRef = collection(db, "cars")
///create user f()
// create state variable for inputs, populate the by 
// onChange={(event) => {setNewName(event.target.value)}} from input field
const [imageUpload, setImageUpload] = useState(null) 
/////tad kad shis nomainaas !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const [newName, setNewName] = useState("")
const [newYear, setNewYear] = useState(0)
const [newPrice, setNewPrice] = useState(0)
const [newInfo, setNewInfo] = useState("")
const [newTel, setNewTel] = useState("")


// getDownloadURL(ref(storage, "images/8.jpgkTdjpwwJA2Rhg1buAL4VcvEkLg03"))
//   .then((url) => {console.log(url)
//   })


const uploadAdd = () => {
const imageRef = (ref(storage, `images/${imageUpload.name}${globalUser.uid}`))
uploadBytes(imageRef, imageUpload).then(createCar)

}

const createCar = async () => {
await addDoc(usersCollectionRef, {
uid: globalUser.uid, 
name: newName,
price: newPrice,
year: newYear,
info: newInfo,
tel: newTel,
email: globalUser.email,
uid: globalUser.uid,
photo: imageUpload.name+globalUser.uid})
// when adding u need 2 things, reference to ur db colection and data as object
rerenderPage()
}

// const updateUser = async (id, age) => {
// // this is so when updating firestore knows which entry to update, it takes db, collection and id
// const userDoc = doc(db, "users", id)
// // to update u need 2 things, id and current value
// const newFields = {age: age + 1}
// //  define which fields will be updated
// await updateDoc(userDoc, newFields)
// //  u need to target with doc(db, colection, id) and newsfields(the value to be updated)
// }



///Deleting user
const rerenderPage=()=>{window.location.reload(true)}
const deleteUser = async (id)=> {
//need to reference entry just like for update
const userDoc = doc(db, "cars", id)
await deleteDoc(userDoc)
rerenderPage()
}


useEffect(() => {

// initial load when receiving db colection
const getUsers = async () => {
const data = await getDocs(usersCollectionRef)
setCars(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
console.log("getting users")
}

//  then calling read from bd 
getUsers()
},[])

const form = ()=>{
  return   <div className="form">
  <input placeholder="Model" onChange={(event) => {setNewName(event.target.value)}}/>
  <input placeholder="Price" onChange={(event) => {setNewPrice(event.target.value)}}/>
  <input placeholder="Year" onChange={(event) => {setNewYear(event.target.value)}}/>
  <input placeholder="Info" onChange={(event) => {setNewInfo(event.target.value)}}/>
  <input placeholder="Telephone" onChange={(event) => {setNewTel(event.target.value)}}/>
  <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
{/* if not 0 then it would allow upload many, but now its just the 1st */}
  <button onClick={uploadAdd}>add car</button></div>
}
return (
  <div className="App">

  {globalUser ? form() : <h1> Please log in to post</h1>}
<div className="carCardContainer">
{cars.map((car) => {return(
<Card props={car}/>
  
)
})}
    </div>
    </div>
  );
}

export default Crud;

