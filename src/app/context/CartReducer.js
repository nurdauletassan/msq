import { createSlice } from '@reduxjs/toolkit';

const initialCartState = JSON.parse(localStorage.getItem('cart')) || {
  total: 0,
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      const { id, size } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id
      );
    
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.total += 1;
        state.items.push({ ...action.payload, quantity: 1, size: size });
      }
    
      state.totalPrice += action.payload.price;
      localStorage.setItem('cart', JSON.stringify(state));
    },    
    removeItem: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id);

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.total -= 1;
          state.totalPrice -= existingItem.price;
          state.items.splice(existingItemIndex, 1);
        }
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state) => {
      state.total = 0;
      state.totalPrice = 0;
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
