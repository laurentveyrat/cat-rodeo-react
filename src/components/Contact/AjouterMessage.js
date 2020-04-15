import React, { Component } from 'react';
import './AjouterMessage.css';

class AjouterMessage extends Component {
    state = {
        name: '',
        mail: '',
        message: ''
    }

    displayMessageConfirmation = () => {
        document.querySelector('.message-sent').style.display = "block";

        setTimeout(() => {
            document.querySelector('.message-sent').style.display = "none";
        }, 10000)
    }

    displayMessageError = () => {
        document.querySelector('.email-not-valide').style.display = "block";

        setTimeout(() => {
            document.querySelector('.email-not-valide').style.display = "none";
        }, 20000)
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const message = { ...this.state }

        // Vérifier si champ email valide avec Regex
            // si email valide => passer à la suite
            // sinon renvoyer un message d'erreur en rouge en bas du formulaire 

        const mail = document.getElementById('mail-contact').value
        const emailReg =  /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
        
        if (!emailReg.test(mail)) {
            return this.displayMessageError()
        }

        this.props.ajouterMessage(message)

        // Reset message
        Object.keys(message).forEach(item => {
            message[item] = ''
        })
        this.setState({ ...message })
        
        // Afficher un message de confirmation en-dessous du formulaire pendant 10 sec
        this.displayMessageConfirmation()
    }

    render() {
        return (
            <div className='contact-form'> 
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="rectangle-name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name='name' 
                        type='text' 
                        placeholder='Name'
                        required>
                    </input>
                    <input
                        className="rectangle-mail" 
                        value={this.state.mail}
                        onChange={this.handleChange}
                        name='mail'
                        id='mail-contact' 
                        type='email' 
                        placeholder='Email Address'
                        required>
                    </input>
                    <textarea
                        className="rectangle-message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        name='message' 
                        rows='15' 
                        placeholder="Message..."
                        required
                    />
                    <div className='message-sent' >
                        <p>Your message is well sent!</p>
                    </div>
                    <div className='email-not-valide' >
                        <p>Please verify your email address!</p>
                    </div>
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        )
    }
}

export default AjouterMessage;