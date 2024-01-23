import React, { useState } from 'react';
import './login.css'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeSection, setActiveSection] = useState('signin');

  const handleToggle = () => {
    setActiveSection((prevSection) => (prevSection === 'signup' ? 'signin' : 'signup'));
  };
  const handleSignUp = () => {
   
  };

  return (
    <div className='Fullpage'>

  
    <div className='toogle'>
    {/* <button className={activeSection === 'signup' ? 'btn' : 'active-btn'} onClick={() => setActiveSection('signup')}>
          Sign Up
        </button>
        <button className={activeSection === 'signin' ? 'btn' : 'active-btn'} onClick={() => setActiveSection('signin')}>
          Sign In
        </button> */}
        {activeSection === 'signin' && (
    <div className='signIn'>

    <div className='contentPage'>
      <h2>Sign In</h2>
      <form className="page">
        <div className='secHeading'>
          <label>Email:</label>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='secHeading'>
          <label>Password:</label>
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='secHeading'>
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button className="btn" type="button" onClick={handleSignUp}>Sign In</button>
        <p>Are you already member??<span onClick={handleToggle}>Sing Up</span></p>
      </form>
    </div>
    </div>)}
    </div>


    {activeSection === 'signup' && (
    <div className='signUp'>

    <div className='contentPage'>
      <h2>Sign up</h2>
      <form className="page">
        <div className='secHeading'>
          <label>Your Name:</label>
          <input type="text" placeholder='Your name' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='secHeading'>
          <label>Last Name:</label>
          <input type="text" placeholder='Last Name' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='secHeading'>
          <label>Username:</label>
          <input type="text" placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='secHeading'>
          <label>Email:</label>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='secHeading'>
          <label>Password:</label>
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='secHeading'>
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className='secHeading'>
          <label>Phone Number:</label>
          <input type="number" placeholder="Phone Number" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button className="btn" type="button" onClick={handleSignUp}>Register</button>
        <p>Are you already Sign IN??<span onClick={handleToggle}>Sing In</span></p>
      </form>
    </div>
    </div>)}
    </div>
  );
};

export default Signup;