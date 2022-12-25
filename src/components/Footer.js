import "./FooterStyles.css"
import {FaFacebook, FaHome, FaLinkedin, FaTwitter, FaPhone, FaMailBulk} from "react-icons/fa"


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: 
                        "#fff", marginRight: "2rem"}} />
                <p>365 Assiniboine Rd</p>
                <p>North York</p>
                </div>
                
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{ color: 
                        "#fff", marginRight: "2rem"}} />
                <p>+1 4375 333 257</p></h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{ color: 
                        "#fff", marginRight: "2rem"}} />
                <p>emmnauelmoshood571@gmail</p></h4>
            </div>


            <div className="right">
                <h4>About the company</h4>
                <p>This is gist about myself to be copied 
                    and pasted at a later date</p>
                <div className="social">
                    <FaFacebook size={20} style={{ color: 
                            "#fff", marginRight: "1rem"}} />
                    <FaTwitter size={20} style={{ color: 
                            "#fff", marginRight: "1rem"}} />  
                    <FaLinkedin size={20} style={{ color: 
                            "#fff", marginRight: "1rem"}} />      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer