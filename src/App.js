import { React, useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Preloader from './components/PreLoader';
import HamburgerMenu from './components/HamburgerMenu';
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div className="App">
      {
        loading ? (
          <Preloader />
        ) : 
        <><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Landing />
          <About />
          <Projects />
          <Contact />
        </div></> 
      }
    </div>
  );
}

export default App;
