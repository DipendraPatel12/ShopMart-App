import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    loading: false,
    cart_success: false
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.cart.find(
        item => item.id === action.payload.id
      );

      if (product) {
        product.quantity += 1;

        state.cart_success = true;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.cart_success = true;
      }

      updateTotals(state);
    },

    increaseQuantity: (state, action) => {
      const product = state.cart.find(
        item => item.id === action.payload
      );
      if (product) {
        product.quantity += 1;
      }
      updateTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const product = state.cart.find(
        item => item.id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }

      updateTotals(state);
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    }
    , cartSuccessReset: (state) => {
      state.cart_success = false
    }
  },
});

const updateTotals = (state) => {
  state.totalItems = state.cart.reduce(
    (prev, pro) => prev + pro.quantity,
    0
  );

  state.totalPrice = state.cart.reduce(
    (prev, pro) => prev + pro.price * pro.quantity,
    0
  );
};

export const {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  cartSuccessReset
} = cartSlice.actions;

export default cartSlice.reducer;