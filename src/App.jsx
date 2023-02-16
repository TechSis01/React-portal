import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Modal from './Modal'

function App() {
  const[modalState , setModalState] = useState(true)

  function openModal(){
    setModalState((prev)=>{
      return !prev
    })
  }
  
  function closeModal(){
    setModalState(false)
  }

  return (
    <div className="container">
        <button className='open-modal' onClick={openModal}>Open Modal</button>
        {modalState && <Modal modalState={modalState} closeModal={closeModal}/>}
    </div>
  )
} 

export default App
