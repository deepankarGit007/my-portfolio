import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience"; 
import TechStack from "./components/TechStack";   
import Projects from "./components/Projects";
import GenAI from "./components/GenAI";           
import Contact from "./components/Contact";       

function App() {
  return (
    <div className="bg-primary overflow-x-hidden relative text-gray-200 font-sans"> 
       <Navbar />
       <Hero />
       <About />
       <Experience />
       <TechStack />
       <Projects />
       <GenAI />     
       <Contact />
    </div>
  )
}

export default App