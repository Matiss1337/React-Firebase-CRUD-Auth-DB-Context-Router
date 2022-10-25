import React, { useState } from 'react'
import {storage} from "./firebase-config"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
// ref is to know where to save n how 
import {v4} from "uuid"
// used to add unique string to files etc 


// 1st i make ref so we know where the file goes 


function Img() {
const [imgUrl, setImgUrl] = useState(null)



getDownloadURL(ref(storage, "images/8.jpgkTdjpwwJA2Rhg1buAL4VcvEkLg03"))
  .then((url) => {console.log(url)
  })
  .catch((error) => {
    // Handle any errors
  });




  
const [imageUpload, setImageUpload] = useState(null)
// used to 1st get filename in uploadImage n then in uploadBytes as 2nd parameter as what to save

const uploadImage = () => {
    if(imageUpload == null) return;
const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
///where we want to save file
    uploadBytes(imageRef, imageUpload).then(console.log(imageRef._location.path_))
    // referenece for path use to receive url later
}


  return (
    <div>
<h1>Lets save images</h1>
<input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
<button onClick={uploadImage}>Save</button>

    </div>
  )
}

export default Img


// Path
// "images/7.jpg2714b72d-042b-4a70-8a19-ba30f651daa6"