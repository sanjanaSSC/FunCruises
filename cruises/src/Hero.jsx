import React from "react";
import './App.css';
import hero from './hero.png';

function Hero(){
    return(
        <div className="page">
            <nav className="nav">
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <div className="menu">
                    <ul>
                        <li><button>Home</button></li>
                        <li><button>Pricing</button></li>
                        <li><button>Blogs</button></li>
                        <li><button>Activity</button></li>
                    </ul>
                </div>
            </nav>
            <div className="main">
                <div className="text">
                    <h1>Luxury Yacht Rentals in Goa</h1>
                    <h4>Book from a variety of boat and yacht experiences in Goa. Having a relaxing time 
                        cruising on the serene waters of goa on our luxury yachts
                    </h4>
                    <button>Online Booking</button>
                </div>
                <div className="Himg">
                    <img src={hero} alt="no"></img>
                </div>
            </div>
            <div className="intro">
                <h1>Our Boats & Yachts In Goa</h1>
                <hr/>
                <p>Choose from a wide selection of yachts ranging from luxury motor yachts to compact speed
                    boats in Goa, and enjoy cruising withyour near and dear ones. We also create custom boat
                    experiences for you in Goa as per your wish and help you get a perfect yacht to suit your 
                    needs
                </p>
            </div>
        </div>
    );
}

export default Hero;