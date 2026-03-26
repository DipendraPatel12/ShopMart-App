import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice'
import productSlice from './slices/productSlice'
import cartSlice from './slices/cartSlice'
import favoriteProductSlice from '../redux/slices/favoriteProduct'


const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productSlice,
        cart: cartSlice,
        favorite: favoriteProductSlice
    }
})

export default store
