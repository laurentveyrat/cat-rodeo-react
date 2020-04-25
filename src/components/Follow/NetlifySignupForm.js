import React, { Component } from 'react';
import './NetlifySignupForm.css';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class NetlifySignupForm extends Component {
  state = {
    email: ''
  }
 
  afficheMessageSucces() {
    const divInputMail = document.getElementById("mc-field-group")
    const messageSucces = document.getElementById("mce-success-response")

    divInputMail.classList.add("success")
    messageSucces.style.display = "inline"
    setTimeout(() => {
      messageSucces.style.display = "none"
      divInputMail.classList.remove("success")
    }, 20000)
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

  handleSubmit = event => {
    // console.log("Click submit !")

    const email = this.state.email
    const emailReg =  /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i

    const myCheck = document.getElementById("myCheckbox")
  
    if (myCheck.checked && emailReg.test(email)) {
      this.afficheMessageSucces()

      fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => console.log("Form sent!"))
            .catch(error => alert(error));

      // Reset mail box & checked button
      this.setState({email: ''})
      myCheck.checked = false
    }
    else {
      myCheck.checked ? this.afficheMessageErreur("mailNonValide") : this.afficheMessageErreur("checkboxNonCocher")
      console.error("Form not sent !")
    }
    event.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


  
  render() {
    const { email } = this.state;
    return (
    
      <form id='mc-embedded-subscribe-form' onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
     
        <div className="form-follow">      
          <div id="mc-field-group">
            <label>
              <input 
                type="email" 
                id='mce-EMAIL' 
                name="email" 
                value={email} 
                onChange={this.handleChange} 
                placeholder="Email Address" 
                required/>
            </label>
          </div>
          <div className="clear">
            <input type="submit" value="JOIN" readOnly/>
          </div>
        </div>

        <div id="mce-responses">
            <div id="mce-error-response-checkbox" style={{display: 'none', color: 'red', fontWeight: 'bold'}}>Please check the conditions below !</div>
            <div id="mce-error-response-mail" style={{display: 'none', color: 'red', fontWeight: 'bold'}}>Please verify your email address !</div>
            <div id="mce-success-response"style={{display: 'none', color: 'green', fontWeight: 'bold'}}>Thanks for your trust.</div>
        </div>

        <div>
          <label className="pa0 ma0 lh-copy f6 pointer">
            <input type="checkbox" id="myCheckbox" required/>
              <span className="terms">I agree to the <strong>Terms and Conditions</strong></span>
          </label>
        </div>
      </form>         
    )
  }
}

export default NetlifySignupForm;