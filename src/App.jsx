//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Newslatter from "./Components/Newslatter";
// import Card from "./Components/Card";
//import Particles1 from "./Components/Particles_1";
import Footer from "./Components/Footer";
// import ExSection from "./Components/ExSection";
import Particles1 from "./Components/Particles_1";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Particles1 />
      <div className="container1">
        <div className="container2">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Newslatter />
      {/* <Card /> */}
      <div className="bg-white">

      <Footer />
      </div>
    </>
  );
}

export default App;
