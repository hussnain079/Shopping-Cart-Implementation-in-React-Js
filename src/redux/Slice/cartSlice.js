// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalPrice += newItem.price;
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const itemToRemove = state.items.find((item) => item.id === idToRemove);
      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== idToRemove);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
