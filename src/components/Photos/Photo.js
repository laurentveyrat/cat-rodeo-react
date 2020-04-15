import React, { useState, Fragment } from 'react';
import './Photo.css';

import Modal from './Modal'

const Photo = ({ photo }) => {

    const [showModal, setShowModal] = useState(false)

    // const requireImage = chemin => {
    //     try {
    //         return require(`../../images/photos/${chemin}`)
    //     } catch (err) {
    //         return require(`../../images/photos/photo-1.jpg`)
    //     }
    // }
    

    function toggleModal() {
        setShowModal(!showModal)
    }

    return (
        <Fragment>
            <div className="rectangle-photos">
                <img 
                    onClick={() => toggleModal()}
                    src={photo.url} 
                    alt={photo.alt} />
            </div>
            <Modal showModal={showModal} toggleModal={toggleModal} photo={photo} />
        </Fragment>
    )
}

export default Photo;