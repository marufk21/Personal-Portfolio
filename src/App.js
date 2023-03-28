import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
import Education from "./Components/Education";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      {/* <Projects /> */}
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
