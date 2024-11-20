import React, { useState } from 'react'

export const UseState = () => {
    const [c,setCount]=useState(0);
  return (
    <div>
       <button onClick={()=>setCount((c)=c+1)}>Count - {c}</button>
       <button onClick={()=>setCount(1)}>Count - {c}</button>

       <button onClick={()=>setCount(5)}>Count - {c}</button>

    </div>
  )
}
