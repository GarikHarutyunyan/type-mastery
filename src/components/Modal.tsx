import React from 'react';
import '../styles/Modal.module.css'; 

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
