import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import './Reviews.css'
const Reivews= ()=> {
    return (
      <div className='review section container'> 
          <div className="secContainer grid">
            <div className="textDiv">
              <span className='redText'>From Our Customer</span>
              <h3>Real Time Experience Of Our Beloved Customer</h3>
                <p>
                Say goodbye to guesswork and hello to confidence, as you virtually try on outfits, ensuring a perfect match for your style. Choose us for a fashion-forward journey where every click is a step into the future of personalized shopping.
                </p>
               
                  <span className='stars flex'>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                  </span>
               <div>
                
               </div>
            </div>
          </div>
      </div>
    )
  };

export default Reivews
