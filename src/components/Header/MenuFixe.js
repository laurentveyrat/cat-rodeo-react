import React from 'react';
import './MenuFixe.css';
import Logo from './Logo'
import ListMenu from './ListMenu'

const MenuFixe = (props) => {
    
    let isMenuResponsive = props.menuResponsive
    let navClassName = ''

    if (isMenuResponsive) {
        navClassName = ' responsive'
    } else {
        navClassName = ''
    }
    
    return (
        <div className='myHeader'>
           <nav id="menu-fixe" className={`myMenu-fixe ${navClassName}`} >
                <Logo 
                    menuResponsive={props.menuResponsive}
                    handleMenuResponsive={props.handleMenuResponsive} />
                <ListMenu 
                    menuResponsive={props.menuResponsive}
                    handleMenuResponsive={props.handleMenuResponsive} />
           </nav>
        </div>
    );
};

export default MenuFixe;