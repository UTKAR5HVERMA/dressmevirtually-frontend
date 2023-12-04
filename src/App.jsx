import AIvirtuallworld from './components/AI virtuall world/AIvirtuallworld'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Questions from './components/Questions/Questions'
import Middle from './components/Middle/Middle'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import Links from "./Link.jsx"
// import Reviews from './components/Reviews/Reviews'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/SignUp/Signup'
import './app.css'
import Contact from './components/contact/Contact.jsx'
function App() {
  

  return (
   <div>

<BrowserRouter>
<Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" >
            <Route index element={<div>
            <Home/>
            <Middle/>
            <Questions/>
            <Footer/>
          </div>} />
            <Route exact path="/home" element={<div>
            <Home/>
            <Middle/>
            <Questions/>
            <Footer/>
          </div>} />
            <Route exact path="/aivirtuallproduct" element={<AIvirtuallworld />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App