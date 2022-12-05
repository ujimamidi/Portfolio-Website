import React from 'react'

import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <a href="#landing" className="nav-logo">
        <span>U</span>
        <span>J</span>
        <span>W</span>
        <span>A</span>
        <span>L</span>
        <span>.</span>
      </a>
      <div className="navbar-container__inner">
        <a href="#landing" className="navbar-item nav1">// home <span>01</span></a>
        <a href="#about" className="navbar-item nav2">// about <span>02</span></a>
        <a href="#projects" className="navbar-item nav3">// projects <span>03</span></a>
        <a href="#contact" className="navbar-item nav4">// contact <span>04</span></a>
      </div>
    </div>
  )
}
