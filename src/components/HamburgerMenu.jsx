import React from 'react'

import '../styles/HamburgerMenu.css';

export default function HamburgerMenu({ menuOpen, setMenuOpen }) {
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className={'menu ' + (menuOpen && "hamburger-active")}>
      <ul>
        <li className='menu-item' onClick={closeMenu}><a href="#landing"><span>01</span> home</a></li>
        <li className='menu-item' onClick={closeMenu}><a href="#about"><span>02</span> about</a></li>
        <li className='menu-item' onClick={closeMenu}><a href="#projects"><span>03</span> projects</a></li>
        <li className='menu-item' onClick={closeMenu}><a href="#contact"><span>04</span> contact</a></li>
      </ul>
      <h5>Created by Ujwal Mamidi. © 2022.</h5>
    </div>
  )
}