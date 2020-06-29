import React, { useState } from 'react'
import './Photo.css'

import Modal from './Modal'

const Photo = ({ photo }) => {
  const [showModal, setShowModal] = useState(false)


  function toggleModal (e) {
    setShowModal(!showModal)
  }

  // const requireImage = chemin => {
  //     try {
  //         return require(`../../images/photos/${chemin}`)
  //     } catch (err) {
  //         return require(`../../images/photos/photo-1.jpg`)
  //     }
  // }

  return (
    <>
      <div className='rectangle-photos'>
        <img
          onClick={() => toggleModal()}
          src={photo.url}
          alt={photo.alt}
        />
      </div>
      <Modal showModal={showModal} toggleModal={toggleModal} photo={photo} />
    </>
  )
}

export default Photo