import React from 'react';
import iconMenu from '../../images/icons/menu.png';

const IconHamburger = (props) => {
    let isMenuResponsive = props.menuResponsive
    let menuHamburgerClassName = 'active'

    if (isMenuResponsive) {
        menuHamburgerClassName = 'disabled'
    } else {
        menuHamburgerClassName = 'active'
    }
    
    return (
        <div id="menu-hamburger" className={`${menuHamburgerClassName}`}>
            <a onClick={props.handleMenuResponsive}><img src={iconMenu} alt='icon hamburger' /></a>
        </div>
    );
};

export default IconHamburger;