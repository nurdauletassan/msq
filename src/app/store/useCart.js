import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../context/CartReducer';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
