import React from 'react'
import './Navbar.css'
import {AiOutlineSearch } from 'react-icons/ai';
import{BiSolidUser} from 'react-icons/bi';
import{AiOutlineHeart}from 'react-icons/ai';
import{AiOutlineShoppingCart}from 'react-icons/ai';

const Navbar=()=>{
    return(
        <div>
        <div className="container">   
        <div className="row">

        <div className="col-5">
             <AiOutlineSearch/>
             <input type="text" placeholder="search"/>
            </div>

        <div className="col-3">
            <a href="#">SHOPPERS</a>
            </div>

        <div className="col-4">
             <BiSolidUser/>
            <AiOutlineHeart/>
            <AiOutlineShoppingCart/>
            </div>
</div>
</div>

<div className="navbar-container">
<div className="row1">
<div className='column1'>
    <ul type="none">
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">SHOP</a></li>
        <li><a href="#">CATALOGUE</a></li>
        <li><a href="#">NEW ARRIVALS</a></li>
        <li><a href="#">CONTACT</a></li>
        
    </ul>
</div>

</div>
</div>

</div> 

    )
}
export default Navbar