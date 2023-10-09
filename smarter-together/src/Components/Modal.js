import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, isBreak }) => {
  let breakStatus = isBreak ? "break time" : "back to study";

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p onClick={onClose}>{breakStatus}</p>
        <br></br>
        <p className='dismiss'>*click to dismiss*</p>
      </div>
    </div>
  );
};

export default Modal;