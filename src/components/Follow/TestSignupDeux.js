import React, { Component } from 'react';

class TestSignup extends Component {
    state = {
        mail: ''
    }
 
    handleChange = (e) => {
        const mail = e.target.value
        this.setState({mail})
    }

    handleSubmit = event => {
        console.log("Click submit !")
        event.preventDefault()
        const mail = this.state.mail
        console.log(mail)
        console.log("Form envoyé !")
    }


    render() {
        return (
            <div id="mc_embed_signup" >
            <form  id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll" className="form-follow form-follow1">
              
              <div id="mc-field-group" className="mc-field-group">
                <label htmlFor="mce-EMAIL"></label>
                <input onChange={this.handleChange} type="email" value={this.state.mail} name="EMAIL" className="required email rectangle-mail" placeholder="Email Address" id="mce-EMAIL" required />
              </div>

               
                   {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                    <input readOnly type="text" name="b_361f58b13d23169917ba26f6a_972ef4f895" tabIndex="-1" value="" />
                  </div>

                  <div className="clear">
                    <input readOnly type="submit" value="JOIN" name="subscribe" id="mc-embedded-subscribe" />
                  </div>

                </div>

                <div id="mce-responses">
                  <div className="response" id="mce-error-response-checkbox" style={{display: 'none', color: 'red', fontWeight: 'bold'}}>Please check the conditions below !</div>
                  <div className="response" id="mce-error-response-mail" style={{display: 'none', color: 'red', fontWeight: 'bold'}}>Please verify your address !</div>
                  <div className="response" id="mce-success-response"style={{display: 'none', color: 'green', fontWeight: 'bold'}}>Thanks for your trust.</div>
                </div>

                <div>
                    <label className="pa0 ma0 lh-copy f6 pointer">
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