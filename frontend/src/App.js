import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-primary min-h-screen">
      <Header />
      <Hero />
      <Catalog />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;