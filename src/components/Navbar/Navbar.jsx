import React, { useState } from 'react'
import './Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'
const Navbar= ()=> {
  const [navBar, setNavBar] = useState("menu");

  const showNavBar = ()=> {
      setNavBar('menu showNavbar');
  }
  const removeNavBar = ()=> {
    setNavBar('menu ');
}
  return (

    <div className='navBar'>
      <div className="logoDiv">
        <img className='logodm' src="/Logo/logoinyellow.png"alt="" />
      </div>
      <div className={navBar}>
      <ul>
        <li className='navList'>Home</li>
        <li className='navList'>AI Virtual Product</li>
        <li className='navList'>About</li>
        <li className='navList'>Contact</li>
      </ul>
      <AiFillCloseCircle className='icon closeicon' onClick={removeNavBar}/>
      </div>
   
      <button className='signUpBtn btn'>Sign Up</button>
    
      <PiDotsNineBold className='icon menuicon' onClick={showNavBar}/>
    </div>
  );
};

export default Navbar
