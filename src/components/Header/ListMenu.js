import React from 'react';
import './ListMenu.css';

const ListMenu = (props) => {
    let isMenuResponsive = props.menuResponsive
    let ulClassName = ''

    if (isMenuResponsive) {
        ulClassName = ' responsive'
    } else {
        ulClassName = ''
    }
    
    return (
        <ul id="menu-vertical" className={`menu-flex ${ulClassName}`} >
            <li><a href="#tour" onClick={props.handleMenuResponsive}>TOUR</a></li>
            <li><a href="#news" onClick={props.handleMenuResponsive}>NEWS</a></li>
            <li><a href="#videos" onClick={props.handleMenuResponsive}>VIDEOS</a></li>
            <li><a href="#music" onClick={props.handleMenuResponsive}>MUSIC</a></li>
            <li><a href="#photos" onClick={props.handleMenuResponsive}>PHOTOS</a></li>
            <li><a href="#contact" onClick={props.handleMenuResponsive}>CONTACT</a></li>
        </ul>
    )
}

export default ListMenu;