import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Particles from "./components/Particles";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skill";
import Navbar from "./layouts/Navbar";

function App() {

  return (
    <div className="relative w-full h-screen">
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center">
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App
