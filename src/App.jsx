<<<<<<< HEAD
import Questions from "./components/Questions/Questions";
import Middle from "./components/Middle/Middle";
import AIvirtuallworld from "./components/AI virtuall world/AIvirtuallworld";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/SignUp/Signup";
import "./app.css";
import Contact from "./components/contact/Contact.jsx";

=======
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
>>>>>>> e240c4519d9bba51b368e2b1707b73a06f3dcb6b
function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Middle />
              <Questions />
              <Footer />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div>
              <Home />
              <Middle />
              <Questions />
              <Footer />
            </div>
          }
        />
        <Route
          path="/aivirtuallproduct"
          element={<AIvirtuallworld />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  );
=======
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
>>>>>>> e240c4519d9bba51b368e2b1707b73a06f3dcb6b
}

export default App;
