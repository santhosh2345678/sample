import React,{useEffect, useState} from "react";


 export const Eees=()=>{
    let [count,setCount]=useState(0)

    useEffect(()=>{
        let x=setInterval(()=>{
            setCount((count)=>count+1)
            console.log(count)
        },1000)
        return()=>{
            clearInterval(x)
        }
    },[])
    return(
        <div>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count+1)}>show</button>
        </div>
    )
}