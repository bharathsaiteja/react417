import React,{useEffect,useState} from 'react'

const UseEffectex = () => {
    const[count, setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
        setCount(100);
    },4000)
    document.title="mru";
},[count])//[]->dependency
  return (
    <div>UseEffectex
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffectex