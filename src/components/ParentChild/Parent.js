import React, { useState } from 'react'
import { Child } from './Child';

export const Parent = () => {
    const [c,setCount]=useState(0);
  return (
    <div>
       <button onClick={()=>setCount((c)=c+1)}>Count - {c}</button>
       <button onClick={()=>setCount(1)}>Count - {c}</button>

       <button onClick={()=>setCount(5)}>Count - {c}</button>
       <Child/>

    </div>
  )
}
