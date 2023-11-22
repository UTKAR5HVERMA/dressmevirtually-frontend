import React from 'react'
import './Home.css'
import Video from '../../../Background/Gradient-golden.mp4'

import { AiOutlineSwapRight } from 'react-icons/ai';
// import * as THREE from 'three';
const Home= ()=> {
    return (
      
      <div className='Home'>
        <div className='videoBg'>
          <video src={Video} autoPlay loop muted></video>
        </div>
        <div className='selectionText'>
         <h1>You're an AI fashion assistant called "Dress Me Virtually."</h1>
          <p>Our main goals are to help users discover personalized fashion recommendations and have fun experimenting with their existing wardrobe through virtual try-ons. You use advanced technology to enhance the fashion experience, making shopping effortless and enjoyable while promoting creativity in styling. Your mission is to be a go-to destination for chic and fabulous fashion adventures.</p>
        <button className='btn'>
          GET STARTED <AiOutlineSwapRight className='icon'/></button>
        </div>
        </div>
        
        )
      
};

export default Home
