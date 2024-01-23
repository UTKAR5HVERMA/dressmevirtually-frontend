import React, { useState ,useEffect } from 'react'
import './Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'
import { Link , useNavigate} from 'react-router-dom';
// import Signup from '../SignUp/Signup';
const Navbar= ()=> {
  const [navBar, setNavBar] = useState("menu");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate  = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  const showNavBar = ()=> {
      setNavBar('menu showNavbar');
  }
  const removeNavBar = ()=> {
    setNavBar('menu ');
}
const handleClick = () => {
  navigate('/signup');
};
  return (

    <div className={`navBar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logoDiv">
        <img className='logodm' src="/Logo/logoinyellow.png"alt="" />
      </div>
      <div className={navBar}>
      <ul>
        <li className='navList'><Link className="bar" to="/home">Home</Link></li>
        <li className='navList'><Link className="bar" to="/aivirtuallproduct">AI Virtual Product</Link></li>
        <li className='navList'><Link className="bar" to='/about'>About</Link></li>
        <li className='navList'><Link className="bar" to='/contact'>Contact</Link></li>
      </ul>
      <AiFillCloseCircle className='icon closeicon' onClick={removeNavBar}/>
      </div>
    
      <button onClick={handleClick} className='signUpBtn btn'>Sign Up</button>
    
      <PiDotsNineBold className='icon menuicon' onClick={showNavBar}/>
    </div>
  );
};

export default Navbar
