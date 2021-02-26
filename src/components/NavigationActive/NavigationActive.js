import React from 'react';
import './NavigationActive.sass';
import { NavLink } from "react-router-dom";
import basket from "../../img/basket_black.png";
import fire from "../../config/Fire";

class NavigationActive extends React.Component {

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="header-bg-navigationActive">
                <div className="logo">
                    <NavLink to='/'>Aurora</NavLink>
                </div>
                <div className="nav">
                    <div className='nav-search'>
                        <input type="text" name='search' placeholder='What are you looking for?'/>
                        <i className="fas fa-search"/>
                    </div>
                    <div className="nav-menu">
                        {/*<div onClick={handleTrigger}>*/}
                        {/*    <i className={trigger ? "fas fa-bars" : "fas fa-times"}/>*/}
                        {/*</div>*/}
                        <ul>
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
                        <div>name</div>
                        <div onClick={this.logout}>Logout</div>
                    </div>
                    <div className="basket-img">
                        <img src={basket} alt="basket"/>
                    </div>
                    <div className="basket-circle">
                        <span>{2}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavigationActive;
