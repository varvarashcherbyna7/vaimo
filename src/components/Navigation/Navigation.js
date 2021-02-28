import React, {useState} from 'react';
import './Navigation.sass';
import {NavLink} from "react-router-dom";
import basket from "../../img/basket.png";
import Login from "../Login/Login";

const Navigation = () => {

    const [trigger, setTrigger] = useState(true);
    const [isOpenModalLogin, setOpenModalLogin] = useState(false);

    const handleTrigger = () => {
        setTrigger(!trigger)
    }
    const handleOpen = () => {
        setOpenModalLogin(!isOpenModalLogin)
    }

    return (
        <div className="header-bg-navigation">
            <div className="logo">
                <NavLink to='/'>Aurora</NavLink>
            </div>
            <div className="nav">
                <div className='nav-search'>
                    <input type="text" name='search' placeholder='What are you looking for?'/>
                    <i className="fas fa-search"/>
                </div>
                <div className="nav-menu">
                    <div onClick={handleTrigger}>
                        <i className={trigger ? "fas fa-bars" : "fas fa-times"}/>
                    </div>
                    {
                        trigger
                            ?
                            null
                            :
                            <ul className="nav-menu-mobile">
                                <li><NavLink to='/what’s_new'>what’s new</NavLink></li>
                                <li><NavLink to='/women'>women</NavLink></li>
                                <li><NavLink to='/accessories'>accessories</NavLink></li>
                                <li><NavLink to='/kids'>kids</NavLink></li>
                                <li><NavLink to='/beauty'>beauty</NavLink></li>
                                <li><NavLink to='/outlet'>outlet</NavLink></li>
                                <li><NavLink to='/stories'>stories</NavLink></li>
                            </ul>
                    }
                    <ul className="nav-menu-desktop">
                        <li><NavLink to='/what’s_new'>what’s new</NavLink></li>
                        <li><NavLink to='/women'>women</NavLink></li>
                        <li><NavLink to='/accessories'>accessories</NavLink></li>
                        <li><NavLink to='/kids'>kids</NavLink></li>
                        <li><NavLink to='/beauty'>beauty</NavLink></li>
                        <li><NavLink to='/outlet'>outlet</NavLink></li>
                        <li><NavLink to='/stories'>stories</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="basket">
                <div className="basket-text">
                    <NavLink to='#' onClick={handleOpen}>Sign in</NavLink>
                    {
                        isOpenModalLogin
                        &&
                        <Login setOpenModalLogin={handleOpen}/>
                    }
                    |
                    <NavLink to='/register'>Register</NavLink>

                </div>
                <div className="basket-img">
                    <img src={basket} alt="basket"/>
                </div>
                <div className="basket-circle">
                    <span>{99}</span>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
