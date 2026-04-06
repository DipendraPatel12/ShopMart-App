import { createSlice } from '@reduxjs/toolkit';

const favoriteProductSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteProducts: [],
        success: false
    },
    reducers: {
        addFavorite: (state, action) => {
            const exists = state.favoriteProducts.find(
                item => item.id === action.payload.id
            );

            if (exists) {
                state.favoriteProducts = state.favoriteProducts.filter(
                    item => item.id !== action.payload.id
                );

            } else {
                state.favoriteProducts.push(action.payload);
                state.success = true


            }
        },
        resetSuccess: (state,) => {
            state.success = false
        }

    }
});

export const { addFavorite, resetSuccess } = favoriteProductSlice.actions;
export default favoriteProductSlice.reducer;

