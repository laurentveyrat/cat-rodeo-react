import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
  render () {
    if (!this.props.showModal) {
      return null
    }

    return (
      <div className='modal' onClick={() => this.props.toggleModal()}>
        <div className='boite'>
          <span className='close'>&times;</span>
          <img
            className='modal-content'
            src={this.props.photo.url}
            alt={this.props.photo.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )
  }
}

export default Modal
