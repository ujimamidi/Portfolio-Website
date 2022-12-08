import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import portfolioImage from '../assets/professional_uji_preview_rev_1.png';
import '../styles/Landing.css'

export default function Landing() {
  return (
    <div className='landing-container' id='landing'>
      {/* <div className='landing-container__left'>
        <div className="img-container">
          <img src={portfolioImage} alt="portfolio" />
        </div>
      </div>
      <div className='landing-container__right'>
        <div className="right-container">
          <h2>hi, this is <span id="name">uji.</span></h2>
          <h5>welcome to my <span id="emphasis">world.</span></h5>
          <h6>A Software Engineering student from <span>Melbourne. </span> 
          Has a strong passion in frontend development
          and is an aspiring full stack developer.
          </h6>
          <a href="#about">
          <BsFillArrowDownCircleFill className='landing-arrow'/>
          </a>
        </div>
      </div> */}
    </div>
  )
}
