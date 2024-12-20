import React, { useEffect } from 'react';
import './CartModal.css';
import close from '../shared/images/close.svg'
import bigCart from '../shared/images/bigCart.svg'
import ShopButton from './Landing/ShopButton';
import { useSelector } from 'react-redux';
import image from '../shared/images/landingImage.png'

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
          {cartItems.length === 0 ? (
            <>
              {/* {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
              ))} */}

               
              
              
                <div className='cart-products-total'>
                <div  className="cart-modal-item">
                  <img src={image} alt=''/>
                  <div>
                    <p>кросовка (размер:43)</p>
                    
                  </div>
                  
                 
                </div>
                <div className='cart-total'>
                  <span>
                    <img src={close} alt="" />
                    <p>Очистить</p>
                  </span>
                  <span>
                    <p>Итого</p>
                    <p>54390тг</p>
                  </span>

                </div>
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
