import React, { useEffect } from 'react';
import './CartModal.css';
import close from '../images/close.svg'
import bigCart from '../images/bigCart.svg'

const CartModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.closest('.cart-modal-content') === null) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <div className='cart-modal-title'>Cart</div>
        <img src={close} alt="" onClick={onClose}/>
        <div className='cart-modal-products'>
          <img src="" alt="" />
        </div>
        
       
        
  
      </div>
    </div>
  );
};

export default CartModal;
