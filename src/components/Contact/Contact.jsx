import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2a460798-510e-4954-95dc-ef71e45b38c0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    return (
        <div id='Contact' className='Contact'>
            <div className="Contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="Contact-section">
                <div className="Contact-left">
                    <h1>Let's talk</h1>
                    <p> I'm currectly taking on new projects,so feel free to send me a message about anything that you want me to work on.you can contact anytime.</p>
                    <div classNmae="Contact-details">
                        <img src={mail_icon} alt="" /> <p>psandhya83654@gmail.com</p>
                    </div>
                    <div className="Contact-detail">
                        <img src={call_icon} alt="" /> <p>+91-9618833797</p>
                    </div>
                    <div className="Contact-detail">
                        <img src={location_icon} alt="" /> <p>AP,Chittoor</p>
                    </div>
                    </div>
                
                <from onSubmit={onSubmit} className="Contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="Contact-submit">Submit now</button>
                </from>
            </div>
        </div>
    )
}

export default Contact