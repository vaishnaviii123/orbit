import React, { useState } from "react";

const initialState = ["vaishnavi", "patil"];

export const ArrayUseState = () => {
  const [person, setPerson] = useState(initialState);

  const handleClick = () => {
    // person.push("shubhi");
    // person.push("gupta");

    const newPerson=[...person];
    newPerson.push('shubhi');
    newPerson.push('gupta');
    setPerson(newPerson);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {person.map((person, index) => {
        return <p key={index}>{person}</p>;
      })}
    </div>
  );
};
