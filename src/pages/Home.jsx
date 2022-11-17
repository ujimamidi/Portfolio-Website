import React from 'react';

import "../styles/Home.css";

const Home = () => {
  return (
    <div className='home-container'>
      <div className="intro-section">
        <h2>hi, this is <span id="name">uji</span></h2>
        <h3>welcome to my <span id="tagline">world</span></h3>
      </div>
    </div>
  )
}

export default Home