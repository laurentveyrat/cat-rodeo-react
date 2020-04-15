import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

    // src={this.props.photo.url}

    render() {
        if(!this.props.showModal){
            return null;
        }
        
        return (
            <div className="modal" onClick={() => this.props.toggleModal()}>
                <div className="close">&times;</div>
                <img className="modal-content" src={this.props.photo.url} alt={this.props.photo.alt} />
            </div>  
        )
    }
}

export default Modal;