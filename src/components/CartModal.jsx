import React, { useEffect } from 'react';
import './CartModal.css';
import close from '../shared/images/close.svg'
import bigCart from '../shared/images/bigCart.svg'
import ShopButton from './Landing/ShopButton';
import { useSelector } from 'react-redux';
import image from '../shared/images/landingImage.png'
import CartItem from '../entity/CartItem/CartItem';

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
  const cartItems = useSelector((state) => state.cart.items);

  if (!isOpen) return null;
  
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <div className='cart-modal-title'>Cart</div>
        <img className='cart-close' src={close} alt="" onClick={onClose}/>
        <div className='cart-modal-products'>
          {cartItems.length > 0 ? (
            <>
            <div className="cart-modal-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />

        ))}
      </div>
  
              

            </>
          ) : (
            <>
              <img className='big-cart' src={bigCart} alt="" />
              <p>Your cart is empty</p>
              <p>Fix this by selecting a product in the catalog <br />and clicking the "Add to Cart" button.</p>
              <ShopButton />
            </>
          )}
        </div>

        
       
        
  
      </div>
    </div>
  );
};

export default CartModal;
