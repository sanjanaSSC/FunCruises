import React from "react";
import './App.css';
import Card from "./Card";
import boat from './boat.png';

function Booking(){
    return(
        <div className="book">
            <div className="search">
                <input type="text" placeholder="Search to find Cruise Ship"></input>
            </div>
            <div>
                <div className="row1">
                    <Card img={boat} text="SpeedBoat" price="Rs 10,000 per hour"/>
                    <Card img={boat} text="Manta Ray" price="Rs 10,000 per hour"/>
                    <Card img={boat} text="Searay" price="Rs 10,000 per hour"/>
                </div>
                <div className="row1">
                    <Card img={boat} text="SpeedBoat" price="Rs 10,000 per hour"/>
                    <Card img={boat} text="Manta Ray" price="Rs 10,000 per hour"/>
                    <Card img={boat} text="Searay" price="Rs 10,000 per hour"/>
                </div>
                <div className="row1">
                    <Card img={boat} text="SpeedBoat" price="Rs 10,000 per hour"/>
                    <Card img={boat} text="Manta Ray" price="Rs 10,000 per hour"/>
                    <Card img={boat} text="Searay" price="Rs 10,000 per hour"/>
                </div>
                
            </div>
        </div>
    );
}

export default Booking;