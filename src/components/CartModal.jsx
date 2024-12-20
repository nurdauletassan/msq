import React, { useEffect } from 'react';
import './CartModal.css';

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
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Ваша корзина пуста</h2>
        <p>Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку «В корзину».</p>
        <button onClick={onClose}>Перейти в магазин</button>
      </div>
    </div>
  );
};

export default CartModal;
