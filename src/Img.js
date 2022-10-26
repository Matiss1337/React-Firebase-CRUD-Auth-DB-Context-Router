import React, { useState, useEffect } from 'react'
import Sorting from './Sorting'




function Img() {
const[data, setData] = useState([])
const [query, setQuery]= useState(null)

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
.then(json => setData(json))
},[])


// useEffect(() => {
// 	console.log("q changed")
// }, [q]);

const search = (data) => {
  return data.filter(filteredData => filteredData.id < 5)
  .sort((a,b) => a.id < b.id ? 1 : -1)
  ///sorts largest to smallest
}
///we use filter before passing it thru fro .map


// const updateQ = (i) =>{
//   setQ(i)
// }
  return (
    <div>
<div>
  <input onChange={(event) => {setQuery(event.target.value)}}></input>
</div>
<div>
  <Sorting data={search(data)}/>

</div>

    </div>
  )
}

export default Img

// {data.map((post)=>{
//   return (
//     <div key={post.id}>{post.email}</div>
//   )
// })}

///larger than soething
// {data.filter(filteredData => filteredData.id >45).map((filteredData)=> <h1>{filteredData.id}</h1>)}

/// display in range with && or to achieve multiple checks
// {data.filter(filteredData => filteredData.id >45 && filteredData.id < 50).map((filteredData)=> <h1>{filteredData.id}</h1>)}


///display multiple with ||
//  {data.filter(filteredData => filteredData.id == 1 || filteredData.id == 2).map((filteredData)=> <h1>{filteredData.name}</h1>)}