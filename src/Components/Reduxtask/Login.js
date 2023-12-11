import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLogin } from "./Slice";
import './Style.css';

export const Loginpage = () => {
  let [UserName, setName] = useState("");
  let [Password, setPwd] = useState("");
  let dispatch = useDispatch();

  let x = [
    { UserName: "santhosh", Password: "9080" },
    { UserName: "kumar", Password: "1723" },
    { UserName: "Aswinth", Password: "3175" },
  ]

  const handle = (e) => {
    if (e.target.name === "username") {
      setName(e.target.value);
    } else if (e.target.name === "pwd") {
      setPwd(e.target.value);
    }
  }

  const submit = (i) =>{
    i.preventDefault();
    let z = x.some((val, index) => {
      return UserName === val.UserName && Password === val.Password;
    })

    if (z) {
      dispatch(updateLogin(true))
    }
     else {
      alert("can't Login Check the details");
    }
  }

  return (
    <div>
      <center><div className="container">
        <label> UserName :</label><br></br><br></br>
        <input type="text" name="username" value={UserName} onChange={handle} /><br></br><br></br>
        <label> Password :</label><br></br><br></br>
        <input type="password" name="pwd" value={Password} onChange={handle} /><br></br> <br></br>

        <button onClick={submit} className="Submitbtn">Submit</button><br></br>
      </div>
      </center>
    </div>
  )
}
