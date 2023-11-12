import './App.css'
// import AIvirtuallworld from './components/AI virtuall world/AIvirtuallworld'
// import About from './components/About/About'
// import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import YourComponent from './components/Home/YourComponent'
// import { Canvas } from '@react-three/fiber'
// import Middle from './components/Middle/Middle'
import Navbar from './components/Navbar/Navbar'
// import Contact from './components/contact/contact'
function App() {
  

  return (
   <div>
    <Navbar/>
    <Home/>
  <YourComponent/>
    {/* <Middle/>
    <AIvirtuallworld/>
    <Footer/>
    <Contact/>
    <About/> */}

   </div>
  )
}

export default App