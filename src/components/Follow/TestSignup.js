import React, { Component } from 'react';

class TestSignup extends Component {
    state = {
        mail: ''
    }

    add_email_to_mailchimp_list = (mail) => {
        // const form = new FormData()

        // form.append('email_address', mail)

        const data = {
            "email_address": mail,
            "status": "subscribed"
        }

        console.log('data: ', data)
        
        const url = 'https://us4.api.mailchimp.com/3.0/lists/XXXXXX/members/'

        const API_KEY = 'XXXX'

        const response =  fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 
                        'Authorization': `Basic apikey:${API_KEY}` },
            body: {
                "email_address": mail,
                "status": "subscribed"
            },
        })

        console.log(response)
    }

    handleChange = (e) => {
        const mail = e.target.value
        this.setState({mail})
    }

    handleSubmit = event => {
        console.log("Click submit !")
        event.preventDefault()
        const mail = this.state.mail

        this.add_email_to_mailchimp_list(mail)

        console.log("Form envoyé !")
    }


    render() {
        return (
            <div id="mc_embed_signup" >
                <form onSubmit={this.handleSubmit}>
                    <div id="mc_embed_signup_scroll" className="form-follow form-follow1">
                        <div id="mc-field-group" className="mc-field-group">
                            <label htmlFor="mce-EMAIL"></label>
                            <input onChange={this.handleChange} type="email" value={this.state.mail} name="EMAIL" className="required email rectangle-mail" placeholder="Email Address" id="mce-EMAIL" required />
                        </div>
                        <div className="clear">
                            <input readOnly type="submit" value="JOIN" name="subscribe" id="mc-embedded-subscribe" />
                        </div>
                    </div>
                    <div>
                        <label>
                          <input id="myCheckbox" type="checkbox" />
                            <span className="terms">I agree to the <strong>Terms and Conditions</strong></span>
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default TestSignup;