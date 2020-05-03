import React from 'react'
import './Footer.css'

import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div id="footer" className="footer">
                <div className="copyright">©2020 CAT RODEO ALL RIGHTS RESERVED.</div>
                <ul className="privacy-policy">
                    <li><Link to="/privacy-policy">PRIVACY POLICY</Link></li>
                    <li className="milieu"><Link to="/terms-of-use">TERMS OF USE</Link></li>
                    <li><Link to="/cookie-policy">COOKIE POLICY</Link></li>
                </ul>
            </div> 
        </footer>
    )
}

export default Footer