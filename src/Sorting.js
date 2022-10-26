import React from 'react'

function Sorting({data}) {
  return (
    <div>

{data.map((post)=>{
   return (
     <div key={post.id}>{post.id} {post.name}</div>
   )
 })}



    </div>
  )
}

export default Sorting