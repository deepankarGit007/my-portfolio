import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience"; 
import TechStack from "./components/TechStack";   
import Projects from "./components/Projects";
import GenAI from "./components/GenAI";
import Contact from "./components/Contact"; 
import Snowfall from 'react-snowfall';

function App() {
  return (
    // relative allows absolute/fixed children to position correctly
    <div className="bg-primary overflow-x-hidden relative text-gray-200 font-sans"> 
       
       {/* 1. Main Website Content */}
       <Navbar />
       <Hero />
       <About />
       <Experience />
       <TechStack />
       <Projects />
       <GenAI />      
       <Contact />

       {/* 2. Snowfall Overlay (Moved to the end & z-index increased) */}
       {/* z-50 puts it ON TOP of everything. pointer-events-none lets you click through it. */}
       <div className="fixed inset-0 w-full h-full z-50 pointer-events-none">
          <Snowfall 
            snowflakeCount={80}            // Slightly increased for visibility
            color="#dee4fd"                
            style={{ 
              position: 'fixed',
              width: '100vw',
              height: '100vh',
            }}
            radius={[0.5, 2.5]}
            speed={[0.5, 1.5]}
            wind={[-0.5, 1.0]}
          />
       </div>

    </div>
  )
}

export default App