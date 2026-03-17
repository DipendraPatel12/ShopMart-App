import { createSlice } from '@reduxjs/toolkit';


const favoriteProductSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteProduct: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromFavorite: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        }
    },
});

export const { addFavorite, removeFromFavorite } =
    favoriteProductSlice.actions;
export default favoriteProductSlice.reducer;
