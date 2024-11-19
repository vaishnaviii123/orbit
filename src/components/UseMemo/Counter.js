import React, { useMemo, useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleClickOne = () => {
    setCounterOne(counterOne + 1);
  };
  const handleClickTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 20000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={handleClickOne}>Counter One- {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={handleClickTwo}>Counter Two- {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
