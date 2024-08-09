import React from "react";
import GlobalStyle from "./GlobalStyles";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <HomePage />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
