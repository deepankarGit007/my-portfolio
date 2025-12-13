import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar"; // 1. Import it

function App() {
  return (
    // Added 'relative' here so the absolute positioned navbar sits correctly
    <div className="bg-primary overflow-x-hidden relative"> 
       <Navbar /> {/* 2. Add it at the top */}
       <Hero />
       <Projects />
    </div>
  )
}

export default App