import React from 'react';
import iconMenu from '../../images/icons/close.png';

const IconClose = (props) => {
    let isMenuResponsive = props.menuResponsive
    let menuCloseClassName = 'disabled'

    if (isMenuResponsive) {
        menuCloseClassName = 'active'
    } else {
        menuCloseClassName = 'disabled'
    }

    return (
        <div id="menu-close" className={`${menuCloseClassName}`}>
            <a onClick={props.handleMenuResponsive}><img src={iconMenu} alt='icon croix' /></a>
        </div>
    );
};

export default IconClose;