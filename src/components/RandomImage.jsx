import { useState } from 'react'
import { useEffect } from 'react'



export default function RandomImage({imageURL}) {
  return (
    <div>
        {!imageURL ? <p>Loading...</p> : <img src={imageURL}/>}
    </div>
  )
}