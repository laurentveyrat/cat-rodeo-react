import React from 'react';
import './Follow.css';

import SocialMedia from './SocialMedia'
import NetlifySignupForm from './NetlifySignupForm'

const Follow = () => {
    return (
        <div id="follow">
            <div className="background-logo">
              <div className="block-follow">
                <h2 style={{textAlign: 'center'}}>{'FOLLOW & SUBSCRIBE'}</h2>
                <p>we'll keep you posted on all the latest news from the band!</p>
                <SocialMedia />
                <NetlifySignupForm />
              </div>
            </div>
          </div>
    )
}

export default Follow;