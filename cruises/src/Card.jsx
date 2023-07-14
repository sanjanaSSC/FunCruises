import React from "react";
import './App.css';



function Card(props){
    return(
        <div className="Card1">
            <img src={props.img} alt="n"/>
            <div className="heading">
                <h3>{props.text}</h3>
                <button>Book Now</button>
            </div>
            <h6>{props.price}</h6>
        </div>
    );
}

export default Card;