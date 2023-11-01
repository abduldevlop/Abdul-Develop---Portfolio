import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./container/Header";
import About from "./container/About";
import Tech from "./container/Tech";
import Works from "./container/Works";
import Contact from "./container/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Tech />
      <Works />
      <Contact />
    </>
  );
};

export default App;
