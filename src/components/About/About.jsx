import React ,{ useState} from 'react'
import './About.css'
import UvImg from '../../../TeamMemberimages/utkarshverma.jpg'
import UbImg from '../../../TeamMemberimages/utkarshbhatewara.jpg'
import Footer from "../../components/Footer/Footer.jsx"
import BgImg from "../../../Background/aboutBG.jpg" 

const About= ()=> {
  const [readMore2,  setReadMore2] = useState(true);
  const [readMore1,  setReadMore1] = useState(true);
  // const [readMore2,  setReadMore] = useState(true);

  const toggleReadMore2 = () => {
    setReadMore2(!readMore2);}

  const toggleReadMore1 = () => {
    setReadMore1(!readMore1);}
    return (
      <div>
      <div className='AboutPage'>
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
          <div className='intro1'>

                <h2 className='uvIntroHeading'>Meet Utkarsh Verma:</h2>
                <div className="uvIntro">
                 <p >
                   I'm Utkarsh Verma, the coding wizard behind the scenes at Dress Me Virtually. As the tech architect of our project, I bring the virtual dressing experience to life with lines of code and a dash of innovation.
                     </p> 
                   <div>
                  
                   <div className='teamImage1 '>
                <img src={UvImg} alt="" />
                </div>
                </div>

                </div>
                {readMore2 ? (
                   <p onClick={toggleReadMore2} className="read-more">Read More about me ...</p>
                   ): (<>
                <div className='aboutMore1'>
                <h2>About Me:</h2>
               
                  <p>
                  <h3>Passionate Developer: </h3>
                  With a passion, for coding and a talent for bringing ideas to life I have devoted my skills to developing a flawless and captivating wardrobe, for Dress Me Virtually. I focus on incorporating algorithms while also prioritizing a user interface merging technology with fashion in a stylish manner.
                </p>
                  <p>
                  <h3>Algorithm Design: </h3>
                  I develop sophisticated algorithms that drive the virtual dressing experience, ensuring accurate and relevant outfit recommendations.
                </p>
                  <p>
                  <h3>User Interface Development: </h3>
                  I create intuitive and user-friendly interfaces that seamlessly integrate with our technology, providing a stylish and easy-to-navigate platform for users.
                </p>
                  <p>
                  <h3>Image Recommendation Integration:  </h3>
                  I have incorporated advanced image recommendation functionality into the project, enhancing user interactions by suggesting outfits and styles based on their preferences and past choices.
                </p>
                  <p>
                  <h3>Continuous Improvement: </h3>
                  I actively contribute to refining the project, leveraging feedback and data to enhance its features and maintain high standards of performance and user satisfaction.
                </p>
                    <p onClick={toggleReadMore2} className="read-more">Read less...</p>
                </div> 
                </>
                )}
           
          </div>
          <div className='intro2'>

                <h2 className='uvIntroHeading'>Meet Utkarsh Bhatewra :</h2>
                <div className="uvIntro">
                 <p >
                 I'm Utkarsh Bhatewara, the visionary and software developer behind Dress Me Virtually. As the driving force of our project, I combine creativity and technical expertise to bring the virtual dressing experience to life.
                     </p> 
                   <div>
                  
                   <div className='teamImage1 '>
                <img src={UbImg} alt="" />
                </div>
                </div>

                </div>
                {readMore1 ? (
                   <p onClick={toggleReadMore1} className="read-more">Read More about me ...</p>
                   ): (<>
                <div className='aboutMore1'>
                <h2>About Me:</h2>
               
                  <p>
                  <h3>Innovative Leader & Developer:  </h3>
                  With a passion for both innovation and coding, I lead the development of Dress Me Virtually, focusing on creating a seamless and engaging wardrobe experience. I design algorithms and develop user-friendly interfaces that merge technology with fashion, delivering a stylish and intuitive solution.
                </p>
                    <p onClick={toggleReadMore1} className="read-more">Read less...</p>
                </div> 
                </>
                )}
           
          </div>
                </div>
               <div className='contactForCollab'>
                      <div className='collabeInput'>
                         <h1>Collabration </h1>
                        
                         <h2>For Collab You can Contact here... </h2> 
                         <div className='button-container '>
                         <a href="http://localhost:5173/contact"> Contact here</a>                             
                         </div>

                      </div>
                </div>     
      </div>
          <div>
          <Footer/>
        </div>
      </div>
    )
  };

export default About