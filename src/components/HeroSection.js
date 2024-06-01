import React from 'react'
import dotsPng from './assets/images/userAsset/dots.png'
import cubePng from './assets/images/userAsset/cube.png'
import circlePng from './assets/images/userAsset/circle.png'
import zigzagPng from './assets/images/userAsset/zigzags.png'
import plusPng from './assets/images/userAsset/plus.png'
import userImage from './assets/images/userAsset/UserImage.png'

import  { ReactTyped } from 'react-typed'


const HeroSection = () => {
  return (
    <div className='hero'>
      <div className="hero-section">
        

<div className="faded-text">Gourav Chandravanshi</div>

<div className="hero-section-left">
    <div className="hero-section-heading">
        Hi! Gourav Chandravanshi
    </div>
    <div className="hero-section-heading hero-section-sub-heading ">
        I am a <span className="role">
        <ReactTyped
          strings={[
            'Full Stack Developer',
            'Web Developer',
            'UI-UX Designer',
            'Backend Developer',
            'Coder',
          ]}
          typeSpeed={100}
          backSpeed={80}
          backDelay={1000}
          loop
        />
        </span>
    </div>

    <div className="hero-section-description">
        I am a software developer and here is my portfolio website. Here you'll learn about my journey as a software developer. 
    </div>

    <a className="btn-pink" id="btn" href="https://www.linkedin.com/in/gouravchandravanshi/" target="_blank">Hire me</a>

</div>

<div className="hero-section-right">
    <div className="absolute icons icon-dots">
        <img src={dotsPng} alt=""></img>
    </div>
    <div className="absolute icons icon-cube">
        <img src={cubePng} alt=""></img>
    </div>
    <div className="absolute icons icon-circle">
        <img src={circlePng} alt=""></img>
    </div>
    <div className="absolute icons icon-zigzag">
        <img src={zigzagPng} alt=""></img>
    </div>
    <div className="absolute icons icon-plus">
        <img src={plusPng} alt=""></img>
    </div>
    <div className="user-image">
        <img src={userImage} alt=""></img>
    </div>
    
</div>

</div>

    </div>
  )
}

export default HeroSection
