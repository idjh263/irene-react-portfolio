import React from "react";
import Nav from "./components/Nav/nav";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Project from "./components/Projects/project";
import Contact from "./components/Contact/contact";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About/>
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
