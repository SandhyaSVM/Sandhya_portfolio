import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='Hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Sandhya Peddinti,</span> Frontend developer based in India.</h1>
        <p> I am a frontend developer from bangalore,India with 6 years experience in Cognizant.</p>
        <div className="hero-action">
        <div className="hero-connect">connect with me</div>
        <div className="hero-resume">my resume</div>
        </div>
    </div>
  )
}

export default Hero