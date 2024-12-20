import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../app/context/CartReducer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div style={{ display: 'flex', alignItems: 'start' }}>
              <div className="cart-image"><img src={item.images[0]} alt="" /></div>
              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>

            <div className="cart-actions">
              {item.isFavorite ? <StarIcon /> : <StarBorderIcon />}
              <span>${item.price * item.quantity}</span>
              <div className="quantity">
                <button className="btn-quantity" onClick={() => dispatch(removeItem({ id: item.id }))}><RemoveIcon /></button>
                <p style={{ padding: '0 10px' }}>{item.quantity}</p>
                <button className="btn-quantity" onClick={() => dispatch(addItem({ id: item.id }))}><AddIcon /></button>
              </div>
            </div>
          </div>
        ))}

      </div>


      <div className="cart-summary">
        <div className="summary-item">
          <span>Товары</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Доставка</span>
          <span>$0.00</span>
        </div>
        <div className="summary-total">
          <span>Итого</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Перейти к оплате</button>
        <p className="free-shipping">
          Бесплатная доставка на заказы от <strong>$145.00</strong>
        </p>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
