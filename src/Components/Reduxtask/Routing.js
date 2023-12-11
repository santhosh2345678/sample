import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Loginpage } from "./Login";
import Home from './Home'
import  {useSelector} from "react-redux";
import Form from './Form'

export const Roust=()=>{
    let state=useSelector((data)=>data.data)
    console.log(state)
    return(
        <div>
                <BrowserRouter>
                    {state.Login?
                    <Routes> 
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/Form' element={<Form/>}></Route>
                    </Routes>:
                    <Routes>
                        <Route path="/" element={<Loginpage/>}></Route>    
                    </Routes>}
                </BrowserRouter>
        </div>
    )
}

