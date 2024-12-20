// CartItem.js
import React from "react";
import "../../pages/Cart";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../app/context/CartReducer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div style={{ display: 'flex', alignItems: 'start' }}>
        <div className="cart-image"><img src={item.images[0]} alt="" /></div>
        <div className="cart-info">
          <h4>{item.title}</h4>
          <p>{item.description} ({item.size})</p>

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
  );
};

export default CartItem;
