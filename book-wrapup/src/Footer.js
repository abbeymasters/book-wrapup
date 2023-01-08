import React from 'react';
import "./Footer.css";

const Footer = () => {
    return(
        <section className="mainFooterSection">
            <div className="contactInfo">
                <div className="whoWeAre">
                    <h2>WHO WE ARE</h2>
                    <p>www.github.com/abbeymasters<br>
                    </br>www.github.com/allisonbusse</p>
                </div>
                <div className="contactUs">
                    <h2>CONTACT US</h2>
                    <p>abbeykmasters@gmail.com
                    <br></br>allisonbusse@gmail.com</p>
                </div>
                <div className="aboutUs">
                    <h2>ABOUT US</h2>
                    <p>lorem ipsum text
                    <br></br>and more lorem ipsum text</p>
                </div>
            </div>
            <div>
                <p className="largeText">ABBEY & ALLISON</p>
            </div>
        </section>
    )
}

export default Footer;