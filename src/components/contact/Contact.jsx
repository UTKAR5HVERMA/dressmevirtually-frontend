import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../../components/Footer/Footer.jsx';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    emailjs
      .sendForm('service_radwnb6', 'template_xvbw7er', formData, 'fhnfFByvkbliWuKEh')
      .then(
        (result) => {
          console.log(result.text);
          // Optionally, you can reset the form here
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          console.log('EmailJS Error:', error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='ContactBox'>
      <div className='contactForm'>
        <div className='contactHeader'>
          <h1>Contact </h1><span><h1>Here</h1></span>
        </div>
        <div className="formContent grid">
          <ul>
            <li>
              <h1 className='secHeading'>Name :</h1><span><input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Enter your name'/></span>
            </li>
            <li>
              <h1 className='secHeading'>Email :</h1><span><input type="email" onChange={handleChange} name='email' value={formData.email} placeholder='Email'/></span>
            </li>
            <li>
              <h1 className='secHeading'>Phone :</h1><span><input type="number" onChange={handleChange} name='phone' value={formData.phone} placeholder='Phone Number'/></span>
            </li>
            <li>
              <h1 className='secHeading'>Message:</h1><span><textarea className="cas" name="message" value={formData.message} onChange={handleChange} placeholder="Enter Message here" cols="30" rows="10"></textarea></span>
            </li>
          </ul>
          <button className="btn" type='submit'>Submit</button>
        </div>
      </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </form>
  );
};

export default Contact;
