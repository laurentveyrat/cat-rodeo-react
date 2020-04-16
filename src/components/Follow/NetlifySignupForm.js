import React, { Component } from 'react';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


class NetlifySignupForm extends Component {
  state = {
    email: ''
  }

  // handleChange = e => {
  //   const mail = e.target.value
  //   this.setState({mail})
  // }

  // afficheMessageSucces() {
  //   const divInputMail = document.getElementById("mc-field-group")
  //   const messageSucces = document.getElementById("mce-success-response")

  //   divInputMail.classList.add("success")
  //   messageSucces.style.display = "inline"
  //   setTimeout(() => {
  //     messageSucces.style.display = "none"
  //     divInputMail.classList.remove("success")
  //   }, 5000)
  // }
    
  // afficheMessageErreur(errorType) {
  //   const divInputMail = document.getElementById("mc-field-group")
  //   const messageErreurCheckboxNonCocher = document.getElementById("mce-error-response-checkbox")
  //   const messageErreurMailNonValide = document.getElementById("mce-error-response-mail")

  //   divInputMail.classList.add("error")
  //   const messageErreur = (errorType === "mailNonValide") ? messageErreurMailNonValide : messageErreurCheckboxNonCocher
  //   messageErreur.style.display = "inline"
  //   setTimeout(() => {
  //     messageErreur.style.display = "none"
  //     divInputMail.classList.remove("error")
  //   }, 5000)
  // }

  // handleSubmit = event => {
  //   console.log("Click submit !")

  //   const mail = this.state.mail
  //   const emailReg =  /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i

  //   const myCheck = document.getElementById("myCheckbox")
  
  //   if (myCheck.checked && emailReg.test(mail)) {
  //     this.afficheMessageSucces()
  //     console.log("Form envoyé !")
  //     this.setState({mail: ''})
  //   }
  //   else {
  //     myCheck.checked ? this.afficheMessageErreur("mailNonValide") : this.afficheMessageErreur("checkboxNonCocher")
  //     event.preventDefault()
  //     console.error("Form non envoyé !")
  //   }
  // }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { email } = this.state;
    return (
    
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>      
        
    )
  }
}

export default NetlifySignupForm;