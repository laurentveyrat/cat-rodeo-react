import React, { Component } from 'react';
import './Contact.css';

import AjouterMessage from './AjouterMessage'

// Firebase
import base from '../../base'

class Contact extends Component {
  state = {
      messages: {}
  }

  componentDidMount = () => {
    this.newsRef = base.syncState('messages', {
        context: this,
        state: 'messages'
    })  
  }

  componentWillUnmount () {
      base.removeBinding(this.newsRef)
  }

  ajouterMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }

  render () {
    return (
        <div id="contact" className="margin-reduit">
            <h2>CONTACT</h2>
            <div className="contact">
              <div className="rectangle-contact">
                <AjouterMessage ajouterMessage={this.ajouterMessage} />
              </div>
            </div>
          </div>
    )
  }
}

export default Contact;