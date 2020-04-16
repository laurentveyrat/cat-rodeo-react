import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='adminForm ph3'>
            <h2>CAT RODEO ADMIN</h2>
            <a href="https://cat-rodeo.admin.datocms.com/" target='_blank' rel="noopener noreferrer">
                <button className="f1 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue">CONNEXION</button>
            </a>
        </div>
    )
}

export default Login;