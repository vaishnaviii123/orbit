import React, { useState } from 'react'

const initialState={
    fname:'vaishnavi',
    lname:'patil',
}
export const ObjectUseState = () => {
    const[person,setPerson]=useState(initialState);

    const changeName= () =>{
        // person.fname='swati'
        // person.lname='yadav'
        // setPerson(person);

        const newPerson={...person};
        newPerson.fname='swati';
        newPerson.lname='yadav';
        setPerson(newPerson);
    }
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

