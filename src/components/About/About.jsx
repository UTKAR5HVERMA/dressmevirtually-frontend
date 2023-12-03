import React from 'react'
import './About.css'
import UvImg from '../../../TeamMemberimages/utkarshverma.jpg'
import Footer from "../../components/Footer/Footer.jsx"
import BgImg from "../../../Background/aboutBG.jpg" 
const About= ()=> {
    return (
      <div className='AboutPage'>
        <div className='colabImage'>
          <img src={BgImg} alt="Bg image" />
        </div> 
            <div className='secHeading'>
                  <h1>
                    About <span>Us</span>
                    </h1>
            </div>
        <div className='collabDetail grid'>
          <h1> Welcome to Dress Me <span>Virtually!</span> </h1>
            <p>
            At Dress Me Virtually we're truly enthusiastic about merging technology and fashion to offer a one of a kind dressing experience to people around the world. Our project is the result of an endeavor by three individuals who have a shared passion, for creativity, innovation and fashion forwardness.
            </p>
          </div>      
          <div  className='teamHeading' >
            <h1>Team Member</h1>
                <h2 className='ubIntro'>Meet Utkarsh Bhatewara : </h2>
                <div className='teamImage1'>

                {/* <img src={UvImg} alt="" /> */}
                </div>
                <p>

                </p>


          <div></div>
                <h2 className='uvIntroHeading'>Meet Utkarsh Verma :</h2>
                <div className="uvIntro">

                 <p >
                 I'm Utkarsh Verma, the coding wizard behind the scenes at Dress Me Virtually. As the tech architect of our project, I bring the virtual dressing experience to life with lines of code and a dash of innovation.
                  </p> 
                <div className='teamImage1 '>

                <img src={UvImg} alt="" />
                </div>
                </div>



              <h2 className='smIntro'>Meet  Shubhi Mittal :</h2>
              <div className='teamImage1'>

{/* <img src={UvImg} alt="" /> */}
</div>
              <p>


              </p>
          </div>
          {/* <div>
            <Footer/>
          </div> */}
      </div>
    )
  };

export default About