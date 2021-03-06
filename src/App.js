import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Gprojects from "./Pages/Gprojects";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import ErrorPage from "./Pages/Errorpage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/skills"> Skills </Link>
        <Link to="/gprojects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gprojects" element={<Gprojects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;