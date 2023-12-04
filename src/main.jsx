import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import emailjs from 'emailjs-com';

// emailjs.sendForm('service_radwnb6', 'template_xvbw7er', formData, 'fhnfFByvkbliWuKEh')
emailjs.init({ service_id: "service_radwnb6", user_id: "fhnfFByvkbliWuKEh" });

// emailjs.send(,"template_xvbw7er");
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
