import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
