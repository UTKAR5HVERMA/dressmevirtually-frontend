import React , {useState} from 'react'
import './Questions.css'
import Accordion from './Accordion'
const Questions= ()=> {
  const [active , setActive] = useState("How does Dress Me Virtually work?");
    return (
      <div className='questions section container'>
          <div className='secHeading'>
              <h3>Frequently Asked Questions</h3>
                  </div>
                <div className="secContainer grid">



                   <div className="accordion grid"> 
                   <Accordion title = "How does Dress Me Virtually work?"
                   desc =" Browse through our collection of clothing items, click on an item you like, and see it superimposed onto your virtual image."
                   active={active}
                   setActive={setActive}/> 
                   <Accordion title = "Do I need to download any software to use Dress Me Virtually?"
                   desc ="No downloads necessary! Dress Me Virtually is a web-based app, so you can start trying on clothes right from your web browser."
                   active={active}
                   setActive={setActive}/> 
            
                   <Accordion title = "Is my personal information safe?"
                   desc ="We take your privacy seriously. Dress Me Virtually adheres to strict security measures to protect your personal information. We do not store or share any sensitive data without your consent."
                   active={active}
                   setActive={setActive}/> 
            
                   <Accordion title = "Can I share my virtual outfits on social media?"
                   desc =" Yes, Dress Me Virtually allows you to save your favorite outfits for future reference and share them with friends on social media. You can also get feedback from the community. "
                   active={active}
                   setActive={setActive}/> 
            
                        </div>
    
              <div className='form'>
                    <div className='secHeading'> 
                            <h4>Do you have any specific questions</h4>
                          <p>
                            Please fill the form below and our dedicated team will get intouch with you as soon as possible.
                          </p>
                    </div>
            
              <div className="formContent grid">
                <input type="email" placeholder='Enter Email Address' />
                <textarea placeholder='Enter your question here'></textarea>
                
                <button className='submitbtn btn'> 
                Submit Inquiry</button>
                  </div>
                </div>
           </div>
      </div> 
    )
  };

export default Questions
