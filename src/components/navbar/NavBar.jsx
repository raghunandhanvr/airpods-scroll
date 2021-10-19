import React from 'react';
import "./navbar.css";
import {AiFillApple, AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai";

function NavBar() {

    let iconsStyles = {color:"white"}

    return (
        <div id="nav" >
        
        <ul>
          <li><i><AiFillApple style={iconsStyles}/></i></li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>TV</li>
          <li>Music</li>
          <li>Support</li>
          <li><i><AiOutlineSearch style={iconsStyles}/></i></li>
          <li><i><AiOutlineShoppingCart style={iconsStyles}/></i></li>
        </ul>
        
        </div>
    )
}

export default NavBar;
