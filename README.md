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

used for posts id

import React from 'react'
import { useNavigate } from "react-router-dom"
// so i can use links and travaverse my website

function Home() {
let navigate = useNavigate()
return (

<div>
<h1>welcome to my site</h1>
<button onClick={()=> {navigate("/login")}}>Log In / Register</button>
</div>
)
}

export default Home
for navigation

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

const [imageRef, setImageRef] = useState("123")
const [imgUrl, setImgUrl] = useState("")

/// when saving, 1st save image then save db because u get link for rendering img from storage

// this is for saving in storage not for link in db

/// nomainaas reference seivam!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// useEffect(() => {
// setImageRef(ref(storage, `images/${imageUpload.name + v4()}`))
// console.log(imageRef)
// }, [imageUpload]);

/// kad nomainaas reference seivam nomainaas reference prieks datubaazes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// useEffect(() => {
// setImgUrl(imageRef._location.path_)
// console.log(imgUrl)
// }, [imageRef]);

const uploadADD = async () => {
uploadBytes(imageRef, imageUpload).then(console.log(imgUrl))
// referenece for path use to receive url later
}
