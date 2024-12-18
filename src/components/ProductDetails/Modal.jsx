import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Login Required</h2>
                <p>You need to sign in to perform this action.</p>
                <div className="modal-buttons">
                    <button className="modal-button login">Login</button>
                    <button className="modal-button register">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
