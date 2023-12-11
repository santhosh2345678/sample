import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateChange } from "./Slice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Home=()=>{

  let state=useSelector((data)=>data.data)
        console.log(state)
        let dispatch=useDispatch()
        let[taskname,setName]=useState("")
        let [taskdetail,setDetail]=useState("")
        let [radio,setRadio]=useState("")
        let[check,setCheck]=useState(false)

          let as=useNavigate()

        const k=new Date()

        const hour=k.getHours()

        const min=k.getMinutes()

        const sec=k.getSeconds()

    let [params]=useSearchParams()
        
let f=(params.get("id"))

    const handle=(e)=>{
        e.preventDefault()
        if(e.target.name==="Taskname"){
            setName(e.target.value)
        }
        else if(e.target.name==="Taskdetail"){
            setDetail(e.target.value)
        }
        else if (e.target.name==="but"){
            setRadio(e.target.value)  
        }
        console.log(e.target.value)
    }

    const Submit=(y)=>{
        y.preventDefault()
        
        if(taskname===""||taskdetail===""||radio===""){
            // as(`/Home`)  
            setCheck(true)
                
        }
        else if(f!=null){
            let obj={name:taskname,detail:taskdetail,rad:radio,H:hour,M:min,S:sec}
            let p=state.arr.map((valu,inde)=>{
                return parseInt(f)==inde?obj:valu
            })
            dispatch(updateChange(p))
        }
        else {
            let obj={name:taskname,detail:taskdetail,rad:radio,H:hour,M:min,S:sec}
            console.log(obj)
            dispatch(updateChange([...state.arr,obj]))
        }
        setName("")
        setDetail("")
        setRadio("")
    }

    useEffect(()=>{
        if(f!=null){
            let s=state.arr.find((val,ind)=>{
                return ind==parseInt(f)?val:""
            })
            console.log(s)

            setName(s.name)
        setDetail(s.detail)
        setRadio(s.rad)
        }
    
    },[])


    return (
        <div>
          <button className="c2"> <Link to={'/'}>Home</Link></button>
           <center><div className="container">
            <form >
            <label>Task Name:</label><br></br>
            <input type="text" name="Taskname" value={taskname} onChange={handle}/><br></br>
            {taskname===""&&check? <p> enter the name</p>:""}

            <label>Task Detail:</label><br></br>
            <input type="text" name="Taskdetail" value={taskdetail} onChange={handle}/>
            {taskdetail==="" && check?<p> Enter the password</p>:""}<br></br><br></br>

            <input type="radio" id="yes" name="but" value="Completed"  onChange={handle}/>
            <label for="yes">Completed</label><br></br><br></br>

            <input type="radio" id="no" name="but" value="notcompleted"  onChange={handle} />
            <label for="no">Incompleted</label><br></br>
            {radio===""&&check?<p>Choose any one</p>:""}

            <button onClick={Submit} className="Submitbtn">Submit</button>
            </form>
            </div>
            </center>
        </div>
    )
}

export default Home;