import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice'
export default store = configureStore({
    reducer: {
        auth: authReducer

    }
})