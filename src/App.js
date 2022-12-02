import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
