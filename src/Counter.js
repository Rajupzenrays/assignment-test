import React,{useState} from 'react'
import './main.css'

const Counter = () => {
     const [count, setCount] = useState(0);
     function decrement(){
          setCount(count-3)

     }

     function increment(){
          setCount(count+3)

     }
     return (<>
          
          <div className="card">
               <div className="main">
               <h1>Counter</h1>
               <div>
               <button onClick={decrement} className="btn1">-</button>
               <span id='num'>{count}</span>
               <button onClick={increment} className="btn2">+</button>
               </div>
               </div>
          </div>
          </>
     )
}

export default Counter
