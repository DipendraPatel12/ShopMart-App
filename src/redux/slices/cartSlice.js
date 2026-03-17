import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    Loading: false,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        return;
      }
      state.cart.push(action.payload);
    },

    increaseQuantity: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);

      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    clearCart: (state, action) => {
      state.cart = []
    }
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
