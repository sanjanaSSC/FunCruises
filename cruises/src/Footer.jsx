import React from "react";
import './App.css';

function Footer(){
    return(
        <div className="foot">
            <div className="foot1">
                <div className="link">
                    <h2>LINKS</h2>
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Yachts</li>
                        <li>Experiences</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>CONTACT</h2>
                    <p>Near Holy Cross, Virlosa, Britona, Penha De Franca, Bardez, Goa, 403001</p>
                    <p>+917391052730</p>
                </div>
            </div>
            <div className="foot2">
                <h2>GET UPDATES</h2>
                <p>Suscribe to our newsletter</p>
                <input type="email" placeholder="*Email"></input>
                <div className="letter">
                    <input type="text" placeholder="*First Name"></input>
                    <button>Sign Up</button>
                </div>
            </div>
            <div className="foot3">
                <h2>TERMS AND CONDITIONS</h2>
                <ul>
                    <li>We follow a strong anti-drug policy</li>
                    <li>Our yacht comply with high safety standards</li>
                    <li>Equipped with life jackets for all the guests</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;