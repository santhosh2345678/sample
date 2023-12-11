import React,{useState,useEffect} from 'react';
import {Eees} from './Lifechild';

 export const Fsss=()=>{
    let [show,setshow]=useState(1)

    return(
        <div>
    {show?<Eees/>:""}
    <button onClick={()=>setshow(!show)}>hide/show</button>
        </div>
    )
}