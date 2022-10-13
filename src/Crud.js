import React, { useState, useEffect} from "react"
import { db } from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'
// getDocs for receiving db and addDoc to add them, doc being an db entry
// updaateDoc is for updating, doc allows to create an instance of a document
// deleteDoc for deleting

function Crud() {
const [newName, setNewName] = useState("")
const [newAge, setNewAge] = useState(0)
const [users, setUsers] = useState([])
const usersCollectionRef = collection(db, "users")

///create user f()
// create state variable for inputs, populate the by 
// onChange={(event) => {setNewName(event.target.value)}} from input field
const createUser = async () => {
await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)})
// when adding u need 2 things, reference to ur db colection and data as object
}

const updateUser = async (id, age) => {
// this is so when updating firestore knows which entry to update, it takes db, collection and id
const userDoc = doc(db, "users", id)
// to update u need 2 things, id and current value
const newFields = {age: age + 1}
//  define which fields will be updated
await updateDoc(userDoc, newFields)
//  u need to target with doc(db, colection, id) and newsfields(the value to be updated)
}



///Deleting user

const deleteUser = async (id)=> {
//need to reference entry just like for update
const userDoc = doc(db, "users", id)
await deleteDoc(userDoc)
}




useEffect(() => {

// initial load when receiving db colection
const getUsers = async () => {
const data = await getDocs(usersCollectionRef)
setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
}

//  then calling read from bd 
getUsers()
})

return (
  <div className="App">
  <input placeholder="name" onChange={(event) => {setNewName(event.target.value)}}/>
  <input type="number" placeholder="age" onChange={(event) => {setNewAge(event.target.value)}}/>
  <button onClick={createUser}>create user</button>


  {/* /* ///where data is rendered when received from db /// */ }
{users.map((user) => {return(
  <div key={user.id}>
  <h1>name :{user.name}</h1>
  <h2>age: {user.age}</h2>
  <button onClick={()=>{updateUser(user.id, user.age)}}>Get Older</button>
  <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
  </div>
  
)
})}
    </div>
  );
}

export default Crud;

