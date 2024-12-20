// Cart.js
import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "../entity/CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
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
      </div>
    </div>
  );
};

export default Cart;
