import React from 'react';
import './Location.sass';
import iconLocation from "../../img/Shape.png";

const Location = () => {
    return (
        <div className='header-location'>
            <div className='header-location-text'>
                We deliver Worldwide
            </div>
            <div className='header-location-stores'>
                <div className='header-location-stores-img'>
                    <img src={iconLocation} alt="icon location"/>
                </div>
                <div className='header-location-stores-text'>
                    Our stores
                </div>
            </div>
        </div>
    )
}

export default Location;
