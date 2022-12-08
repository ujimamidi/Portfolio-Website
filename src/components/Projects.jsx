import React from 'react'

import bookerooImg from '../assets/bookeroo.png';
import { AiFillGithub } from 'react-icons/ai';
import '../styles/Projects.css'

export default function Projects() {
  // const portfolio = [
  //   {
  //     title: 'Bookeroo',
  //     imgUrl: '',
  //     stack: ['React.js', 'HTML/CSS', 'Java/Springboot', 'SQL'],
  //     link: 'https://github.com/s3844467/JUVKS'
  //   },
  //   {
  //     title: 'Path Planning Algorithm',
  //     imgUrl: '',
  //     stack: ['C++'],
  //     link: 'https://github.com/s3844467/Path-Planning-Algorithm'
  //   },
  //   {
  //     title: 'BlackJack',
  //     imgUrl: '',
  //     stack: ['Java', 'OOP', 'Swing/MVC'],
  //     link: 'https://github.com/s3844467/Path-Planning-Algorithm'
  //   }
  // ]

  return (
    <div className='projects-container' id='projects'>
      <div className="portfolios">
        <div className="portfolio-item">
          <div className="portfolio-image">
            <img src={bookerooImg} alt="bookeroo" />
          </div>
          <div className="portfolio-image__hover">
            <h3>Project Source</h3>
            <div className="portfolio-image__icons">
              <a href="www.google.com"><AiFillGithub className='icon'/></a>
              {/* <a href="www.google"></a>
              <a href="www.google"></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
