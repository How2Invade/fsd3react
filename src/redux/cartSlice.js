import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload);

      if (!existingItem) {
        return;
      }

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        return;
      }

      existingItem.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
