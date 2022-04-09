import React, { useState } from "react";
import Nav from "./components/Nav/nav";
import Home from "./components/Home/home";
import About from "./components/About/about";
// import Skills from "./components/Skills";
// import Project from "./components/Projects";
import Contact from "./components/Contact/contact";

function App() {
  const [categories] = useState([
  
    { 
      name: 'skills',
    },
    { 
      name: 'projects',
      
    },
  
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Home currentCategory={currentCategory}></Home>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
     
    </div>
  );
  }

export default App;
