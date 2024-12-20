import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage
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
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If the item already exists, increase its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // Add the new item with quantity 1
        state.total += 1;
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Update total and totalPrice
      state.totalPrice += action.payload.price;

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];

        // Decrease the quantity
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          // Remove the item if quantity is 1
          state.total -= 1;
          state.totalPrice -= existingItem.price;
          state.items.splice(existingItemIndex, 1);
        }
      }

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state) => {
      state.total = 0;
      state.totalPrice = 0;
      state.items = [];
      localStorage.removeItem('cart'); // Save to localStorage
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
