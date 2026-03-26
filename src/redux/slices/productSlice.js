import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Category from "../../components/Category";


export const getProducts = createAsyncThunk(
    "product/getProduct",
    async (_, { rejectWithValue }) => {
        try {
            console.log("API called");

            const response = await fetch("https://api.escuelajs.co/api/v1/products");

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

export const singleProduct = createAsyncThunk("product/singleProduct", async (id, { rejectWithValue }) => {
    try {
        console.log("API called");

        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

        const data = await response.json();

        console.log("data from redux singleProduct", data);

        if (!response.ok) {
            return rejectWithValue(data?.message || "Failed");
        }

        return data;
    } catch (error) {
        console.log("Error while getting single product details ", error)
        return rejectWithValue(error.message);
    }
})


export const getCategories = createAsyncThunk("product/getCategories", async (_, { rejectWithValue }) => {
    try {
        console.log("API called");

        const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);

        const data = await response.json();

        console.log("data from redux categories", data);

        if (!response.ok) {
            return rejectWithValue(data?.message || "Failed");
        }

        return data;
    } catch (error) {
        console.error("Error While getting Categories", error)
        return rejectWithValue(error.message);
    }
})

export const getCategoryProduct = createAsyncThunk("product/getCategoryProduct", async (id, { rejectWithValue }) => {
    try {
        console.log("API called", id);

        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${Number(id)}/products`);

        const data = await response.json();

        console.log("data from redux for category Product", data);

        if (!response.ok) {
            return rejectWithValue(data?.message || "Failed");
        }

        return data;
    } catch (error) {
        console.log("Error while Getting Category Products", error)
        return rejectWithValue(error.message);
    }
})



const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        product: {},
        categories: [],
        categoryProduct: [],
        loading: false,
        error: null,
    },
    reducers: {},

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
            .addCase(singleProduct.pending, (state) => {
                state.loading = true;
            })

            .addCase(singleProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })

            .addCase(singleProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })

            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })

            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCategoryProduct.pending, (state) => {
                state.loading = true;
            })

            .addCase(getCategoryProduct.fulfilled, (state, action) => {
                state.loading = false;
                console.warn(action.payload)
                state.categoryProduct = action.payload;
            })

            .addCase(getCategoryProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});

export default productSlice.reducer;