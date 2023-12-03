import React from 'react'
import './Footer.css'
// import contact from '../contact/Contact.jsx'
import {ImFacebook} from "react-icons/im"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
const Footer= ()=> {
    return (
      <div className='footer'>
        <div className='secContainer container grid'>
          <div className="logoDiv">
            <div className="footerLogo">
            <img className='logodm' src="/Logo/logoinyellow.png"alt="" />          
            </div>
              <div>
                <h2 className='logoName'>Dress Me Virtually</h2>
                </div>
                </div>
            <div className='socials flex'>
              <ImFacebook className='icon'/>
              <BsTwitter className='icon'/>
              <AiFillInstagram className='icon'/>
            </div>
              <div className='footerLinks'>
                  <span className='linkTitle'>
                    Information
                  </span>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">AI Virtual Product</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href='http://localhost:5173/contact'>Contact</a>
                  </li>
              </div>
              <div className='footerLinks'>
                  <span className='linkTitle'>
                    Helpful Links
                  </span>
                  <li>
                    <a href="#">3d Virutal Fitting Room</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                    <li>
                        <a href="#">Blog</a>
                      </li><li>

                    <a href="#">FAQ</a>
                      </li>
              </div>
              
              <div className='footerLinks'>
                  <span className='linkTitle'> Contact Details</span>
                  <span className='phone'>+111111111</span>
                  <span className='email'>medicaps@gmail.com</span>
                
       
              </div>
        </div>
      </div>
    )
  };

export default Footer
