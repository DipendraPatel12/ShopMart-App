import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    "product/getProduct",
    async (_, { rejectWithValue }) => {
        try {
            console.log("API called");

            const response = await fetch("https://fakestoreapi.com/products");

            const data = await response.json();

            console.log("data from redux getAll Products", data);

            if (!response.ok) {
                return rejectWithValue(data?.message || "Failed");
            }
            return data;
        } catch (error) {
            console.log("Error whiele getting products ", error)
            return rejectWithValue(error.message);
        }
    }
);



const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        product: {},
        categories: [],
        categoryProduct: [],
        newCate: [],
        loading: false,
        error: null,
    },
    reducers: {
        productLiked: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload)
            console.log(product)

            if (product && product.liked) {
                product.liked = false
            } else {
                product.liked = true
            }

            state.categoryProduct = state.categoryProduct.map(item =>
                item.id === action.payload
                    ? { ...item, liked: !item.liked }
                    : item);
        },



        singleProduct: (state, action) => {
            state.loading = true
            const productdata = state.products.find((p) => p.id === action.payload)
            if (productdata) {
                state.product = productdata
                state.loading = false
            }
        }
        ,
        extractCategoriesFromProducts: (state, action) => {
            state.products.forEach(p => {
                if (!state.categories.includes(p.category)) {
                    state.categories.push(p.category);
                }
            });

        }

        ,
        getCategoryRelatedData: (state, action) => {
            state.categoryProduct = state.products.filter((product) => product.category === action.payload)
        }


    },

    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })

            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })

            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })



    },
});
export const { productLiked, singleProduct, extractCategoriesFromProducts, getCategoryRelatedData } = productSlice.actions
export default productSlice.reducer;