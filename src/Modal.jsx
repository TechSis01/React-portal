import React from 'react'
import { createPortal } from 'react-dom'
function Modal({closeModal}) {
 
  return createPortal(
    <div className='modal-container' tabIndex="-1" onClick={closeModal}>
        <div className='modal' tabIndex="0">
            <p>Hello this is my Modal</p>
            <button className='close-modal' onClick={closeModal}>Close Modal</button>
        </div>
    </div>,document.getElementById("modal")
  )
}

export default Modal