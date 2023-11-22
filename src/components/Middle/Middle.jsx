import React from 'react'
import './Middle.css'
import YourComponent from '../../components/Home/YourComponent';
import video1 from '../../../video/video1.mp4'
import video2 from '../../../video/video2.mp4'
import video3 from '../../../video/video3.mp4'
const Middle = () => {
  return ( <div className='vrAdDesign'>
                   <h3 className="text1">3d-Virtual Dress Collection </h3>   
              <div className=' grid-container'>

                    <div className="product-box">
                      <YourComponent/>

                          </div>
                          <p>
                          Discover the future of online fashion with our cutting-edge 3D Virtual Dress Collection. Step into a realm where style meets technology, offering you a unique and engaging way to explore, experiment, and fall in love with the latest trends—all from the comfort of your home.
                          </p>
          
                          </div>

                   <h3 className="text1">Mix and Match </h3>   
              <div className=' grid-container'>
                    <div className="product-box-video">
                   <video src={video1} autoPlay loop muted ></video>
                      
                          </div>
                          <p>
                           Experiment with mixing and matching various clothing items to create stylish outfits. Enhance your creativity and sense of style, offering you a virtual space to explore various combinations before making real-world fashion choices.
                          </p>
          
                          </div>
                   <h3 className="text1">Seasonal and Trend Updates </h3>   
              
              <div className=' grid-container'>
                    <div className="product-box-video">
                     
                   <video src={video2} autoPlay loop muted ></video>
                          </div>
       
                          <p>
                           Embrace the world of fashion evolution with our curated selection of the latest trends and seasonal styles. Our "Seasonal and Trend Updates" section is your gateway to staying effortlessly chic and in vogue.
                          </p>
                        
          
                          </div>
                   <h3 className="text1">Fashion Tips and Trends Blog </h3>   
              
                     
              <div className=' grid-container'>
                    <div className="product-box-video">
                   <video src={video3} autoPlay loop muted ></video>
                          </div>
                          <p>
                          Incorporate a blog section that covers the latest fashion tips, trends, and styling advice. Encourage community members to contribute guest posts or share their insights, creating a platform for knowledge-sharing within the fashion community.
                          </p>
          
              </div>

            </div>
    

)};

export default Middle
