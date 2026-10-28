import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../../api/services/productService';

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await productService.getProducts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
    categories: [],
    categoryProduct: [],
    loading: false,
    error: null,
  },
  reducers: {
    productLiked: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(item => item.id === productId);

      if (product) {
        product.liked = !product.liked;
      }

      state.categoryProduct = state.categoryProduct.map(item =>
        item.id === productId ? { ...item, liked: !item.liked } : item,
      );

      if (state.product?.id === productId) {
        state.product.liked = !state.product.liked;
      }
    },

    singleProduct: (state, action) => {
      const productData = state.products.find(p => p.id === action.payload);
      if (productData) {
        state.product = productData;
      }
    },

    extractCategoriesFromProducts: state => {
      const categorySet = new Set();
      state.products.forEach(p => {
        if (p.category) {
          categorySet.add(p.category);
        }
      });
      state.categories = Array.from(categorySet);
    },

    getCategoryRelatedData: (state, action) => {
      state.categoryProduct = state.products.filter(
        product => product.category === action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;

        const categorySet = new Set();
        action.payload.forEach(p => {
          if (p.category) categorySet.add(p.category);
        });
        state.categories = Array.from(categorySet);
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  productLiked,
  singleProduct,
  extractCategoriesFromProducts,
  getCategoryRelatedData,
} = productSlice.actions;

export default productSlice.reducer;