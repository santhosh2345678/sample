import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateLogin } from "./Slice";
import { updateChange } from "./Slice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import './Style.css';

const Home=()=>{
    let state=useSelector((data)=>data.data)
    console.log(state)
let m=useDispatch()

let g=useNavigate()

const deletebtn=(i)=>{
        let o=state.arr.filter((value,index)=>{
            return i==index?"":value
        })
m(updateChange(o))
}

const editbtn=(i)=>{
g(`/Form?id=${i}`)    

}

const logoutbtn=()=>{
    m(updateLogin(false))
                
}

    return (
        <div>
           <button className="c1"> <Link to={'/Form'}>Form</Link></button>

          <center><div><button onClick={()=>logoutbtn()} className="logoutbtn">LOGOUT</button></div></center><br></br>

            <center>
            <table>
                    <tr>
                        <th>Taskname</th>
                        <th>TaskDetail</th>
                        <th>Completed/<br></br>notcompleted</th>
                        <th>Time</th>
                        <th>Edit/Delete</th>
                    </tr>
                    {state.arr.map((v,i)=>{
                     return <>
                    <tr key={i}> 
                        <td>{v.name}</td>
                        <td>{v.detail}</td>
                        <td>{v.rad}</td>
                        <td>{v.H}:{v.M}:{v.S}  </td>
                        
                        <td><button className="Deletebtn" onClick={()=>deletebtn(i)}>Delete</button> <br></br>
                        <button className="Editbtn" onClick={()=>editbtn(i)}>Edit</button></td>
                    </tr>
                    </>
                    })
                    }
                </table>
                </center>
           
        </div>
    )
}
export  default Home;