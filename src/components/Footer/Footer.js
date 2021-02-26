import React from 'react';
import './Footer.sass';
import instagram from '../../img/insta.png';
import twitter from '../../img/twitter.png';
import snapchat from '../../img/snapchat.png';
import facebook from '../../img/facebook.png';
import youtube from '../../img/youtube.png';
import { NavLink } from "react-router-dom";

const footerData = [
    {
        title: 'About Us',
        items: ['Who we are', 'Our stores', 'Customer Reviews']
    },
    {
        title: 'Categories',
        items: ['Women fashion', 'Accessories', 'Kids']
    },
    {
        title: 'Help',
        items: ['Customer service', 'Size guide', 'Contact us']
    },
    {
        title: 'Payments & Delivery',
        items: ['Purchase terms', 'Guarantee']
    },
    {
        title: 'Social',
        icons: [instagram, twitter, snapchat, facebook, youtube]
    },
]

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-info'>
                {
                    footerData.map((value, index) => {
                        return (
                            <div key={index}>
                                <p>{value.title}</p>
                                <ul>
                                    { value.items
                                        ? value.items.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink to={`/${item}`}>
                                                        {item}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                        : value.icons.map((icon, index) => {
                                            return (
                                                <li key={index} className='icon'>
                                                    <NavLink to={`/${icon}`}>
                                                        <img src={icon} alt={icon}/>
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className='footer-copyright'>
                © Copyright, Aurora 2020. All Rights reserved.
            </div>
        </div>
    )
}

export default Footer;
