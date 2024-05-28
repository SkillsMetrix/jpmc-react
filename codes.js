const counterReducer = (state = 20, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;



----------


  

export const increment=()=>{
    return{
        type:"INCREMENT"
    }
}
export const decrement=()=>{
    return{
        type:"DECREMENT"
    }
}
----

  

import React from 'react';
 import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/actions/counterActions';
function CounterApp(props) {
    const data= useSelector(state => state.counter)
    const dispatch=useDispatch()
    return (
        <div>
             The Count is :{data}
             <hr/>
             <button onClick={()=> dispatch(increment())}>INC</button>
             <button onClick={()=> dispatch(decrement())}>DEC</button>
        </div>
    );
}

export default CounterApp;
