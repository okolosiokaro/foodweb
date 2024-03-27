import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";


function App() {
  return (
    <div className="App">
    <NavBar /> 
    <Hero />
    <HeadlineCards />
    <Food />
    <Category />
    </div>
  );
}

export default App;
