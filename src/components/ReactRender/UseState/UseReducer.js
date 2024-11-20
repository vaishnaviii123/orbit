import React,{useReducer} from 'react'

const initialState=0;

const reducer=(state,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state+1;
      case 'DECREMENT':
        return state-1;
        case 'RESET':
          return initialState;
        default:
          return state;
  }
}
export const  UseReducer=()=> {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count-{count}   </div>

        <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>

    </div>
  )
}

