import React, { useState } from 'react'
import useCounter from './UseCounter';

function CounterTwo() {
    const [count,increment,decrement,reset]=useCounter(10,10);

  return (
    <div>
      <h2> Count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <button onClick={reset}>reset</button>

    </div>
  )
}

export default CounterTwo
