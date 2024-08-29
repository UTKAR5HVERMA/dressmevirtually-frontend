
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

function App() {
  return (
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
}

export default App;
