import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p onClick={onClose}>It's break time! Click anywhere to dismiss.</p>
      </div>
    </div>
  );
};

export default Modal;