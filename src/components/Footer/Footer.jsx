import React from 'react'
import './Footer.css'
import logo from '../../assets/sandhya_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am frontend developer from, BLR with 6 years of experience in Cognizant</p>
    </div>
    <div className="footer-top-right">
        <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter Your email' />
        </div>
    <div className="footer-subscribe">Subscibe</div>
    </div>
        </div>
        <hr />
        <div className="footer-bottom">
        <p classNmae="footer-bottom-left">@ 2023 Sandhya Peddinti, All rights</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
        </div>
        </div>
  )
}

export default Footer