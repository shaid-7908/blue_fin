//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Newslatter from "./Components/Newslatter";
import Card from "./Components/Card";
//import Particles1 from "./Components/Particles_1";
import Footer from "./Components/Footer";
// import ExSection from "./Components/ExSection";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Newslatter />
      <Card />
      <Footer />
    </>
  );
}

export default App;
