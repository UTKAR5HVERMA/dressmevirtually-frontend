// import AIvirtuallworld from './components/AI virtuall world/AIvirtuallworld'
// import About from './components/About/About'
// import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

import Questions from './components/Questions/Questions'
import Middle from './components/Middle/Middle'
// import Reviews from './components/Reviews/Reviews'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/SignUp/Signup'
import './app.css'
// import Contact from './components/contact/contact'
function App() {
  

  return (
   <div>
    <Navbar/>
    <Home/>
    <Middle/>
    <Signup/>
    <Questions/>
    {/* <Reviews/> */}
    {/* <Footer/> */}
    {/* <AIvirtuallworld/>
    <Contact/>
    <About/> */}

   </div>
  )
}

export default App