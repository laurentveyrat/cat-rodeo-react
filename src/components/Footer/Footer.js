import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div id="footer" className="footer">
                <div className="copyright">©2020 CAT RODEO ALL RIGHTS RESERVED.</div>
                <ul className="privacy-policy">
                    <li><a href="#footer">PRIVACY POLICY</a></li>
                    <li className="milieu"><a href="#footer">TERMS OF USE</a></li>
                    <li><a href="#footer">COOKIE POLICY</a></li>
                </ul>
            </div> 
        </footer>
    )
}

export default Footer;