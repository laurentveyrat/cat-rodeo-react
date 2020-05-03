import React from 'react';
import './Logo.css';
import IconClose from './IconClose'
import IconHamburger from './IconHamburger'

import { Link } from "react-router-dom"

const Logo = (props) => {
    let isMenuResponsive = props.menuResponsive
    let logoClassName = ' active'

    if (isMenuResponsive) {
        logoClassName = ' disabled'
    } else {
        logoClassName = ' active'
    }

    return (
        <div className="icon-menu">
            <div id="logo-nav" className={`logo ${logoClassName}`}>
                <h1><Link to="/#header">C<span className="A-orange">A</span>T RODEO</Link></h1>
            </div>

            <IconClose 
                menuResponsive={props.menuResponsive}
                handleMenuResponsive={props.handleMenuResponsive}/>
            <IconHamburger 
                menuResponsive={props.menuResponsive}
                handleMenuResponsive={props.handleMenuResponsive}/>
            
        </div>
    )
}

export default Logo;