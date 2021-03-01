import React, { useState } from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {
    const {name,address,img,phone,salary} = props.player;
    const [isClicked,setIsClicked] = useState(false);
    return (
        <div className="player col-sm-4">
            <div className="card box-shadow" style={{width:'18rem'}}>
                    <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><FontAwesomeIcon icon={faPhone} /> Phone: {phone}</p>
                            <p className="card-text"><FontAwesomeIcon icon={faAddressCard} /> Address: {address}</p>
                            <h6>salary: ${salary}</h6>
                            <button disabled={isClicked} onClick={()=>{
                                props.addPlayerHandler(props.player)
                                setIsClicked(true)
                                }} className="btn">{isClicked ? "Added" : "Add player"}</button>              
                        </div>
            </div>
        </div>
    );
};

export default Player;