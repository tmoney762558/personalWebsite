import React from "react";
import { Navbar, Header, About, Skills, Projects, Contact } from "./containers";

const App = () => {
  return (
    <div className="personal-website">
      <div className="nav-header__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default App;
