import React, { Component } from 'react';

class MailchimpSignupForm extends Component {
  state = {
    mail: ''
  }

  handleChange = e => {
    const mail = e.target.value
    this.setState({mail})
  }

  // A supprimer

  handleSubmit = event => {
    console.log("Click submit !")
    event.preventDefault()
    const mail = this.state.mail
    console.log(mail)
    console.log("Form envoyé !")
    this.setState({mail: ''})
  }

  
  // messageErreurCheckboxNonCocher = document.getElementById("mce-error-response-checkbox")
  // messageErreurMailNonValide = document.getElementById("mce-error-response-mail")
  // messageSucces = document.getElementById("mce-success-response")
  // myCheck = document.getElementById("myCheckbox")
  // inputEmail = document.getElementById("mce-EMAIL")
  // divInputMail = document.getElementById("mc-field-group")

  afficheMessageSucces() {
    const divInputMail = document.getElementById("mc-field-group")
    const messageSucces = document.getElementById("mce-success-response")

    divInputMail.classList.add("success")
    messageSucces.style.display = "inline"
    setTimeout(() => {
      messageSucces.style.display = "none"
      divInputMail.classList.remove("success")
    }, 5000)
  }
    
  afficheMessageErreur(errorType) {
    const divInputMail = document.getElementById("mc-field-group")
    const messageErreurCheckboxNonCocher = document.getElementById("mce-error-response-checkbox")
    const messageErreurMailNonValide = document.getElementById("mce-error-response-mail")

    divInputMail.classList.add("error")
    const messageErreur = (errorType === "mailNonValide") ? messageErreurMailNonValide : messageErreurCheckboxNonCocher
    messageErreur.style.display = "inline"
    setTimeout(() => {
      messageErreur.style.display = "none"
      divInputMail.classList.remove("error")
    }, 5000)
  }

  envoiForm = event => {
    console.log("Click submit !")

    const mail = this.state.mail
    const emailReg =  /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i

    const myCheck = document.getElementById("myCheckbox")
  
    if (myCheck.checked && emailReg.test(mail)) {
      this.afficheMessageSucces()
      console.log("Form envoyé !")
      this.setState({mail: ''})
    }
    else {
      myCheck.checked ? this.afficheMessageErreur("mailNonValide") : this.afficheMessageErreur("checkboxNonCocher")
      event.preventDefault()
      console.error("Form non envoyé !")
    }
  }
    
  // formFollow = document.getElementById("mc-embedded-subscribe-form");
  // formFollow.addEventListener("submit", envoiForm, false);


  render() {
    return (
        <div id="mc_embed_signup" >
                <form 
                  onSubmit={this.envoiForm} 
                  action='https://catrodeo.us4.list-manage.com/subscribe/post?u=361f58b13d23169917ba26f6a&amp;id=972ef4f895' 
                  method="post" 
                  id="mc-embedded-subscribe-form" 
                  name="mc-embedded-subscribe-form" 
                  className="validate" 
                  target="_blank" 
                  noValidate>
                  
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

export default MailchimpSignupForm;