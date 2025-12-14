import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience"; // Added
import TechStack from "./components/TechStack";   // Added
import Projects from "./components/Projects";
import Contact from "./components/Contact";       // Added

function App() {
  return (
    <div className="bg-primary overflow-x-hidden relative text-gray-200 font-sans"> 
       <Navbar />
       <Hero />
       <About />
       <Experience />
       <TechStack />
       <Projects />
       <Contact />
    </div>
  )
}

export default App