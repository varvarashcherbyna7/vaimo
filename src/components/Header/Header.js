import React from 'react';
import './Header.sass';
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <div className='header-bg'>
            <div className='header-bg__gradient'>
                <Navigation/>
            </div>
            <div className='header-bg-text'>
                Hello! Welcome to Aurora
            </div>
        </div>
    )
}

export default Header;
