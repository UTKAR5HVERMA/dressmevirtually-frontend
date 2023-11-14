import './App.css'
// import AIvirtuallworld from './components/AI virtuall world/AIvirtuallworld'
// import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
// import { Canvas } from '@react-three/fiber'
import Middle from './components/Middle/Middle'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/SignUp/Signup'
// import Contact from './components/contact/contact'
function App() {
  

  return (
   <div>
    <Navbar/>
    <Home/>
    <Middle/>
    <Signup/>
    <Footer/>
    {/* <AIvirtuallworld/>
    <Contact/>
    <About/> */}

   </div>
  )
}

export default App