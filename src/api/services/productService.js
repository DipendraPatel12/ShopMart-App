import { productClient } from '../apiClient';
import { ENDPOINTS } from '../endpoints';

export const productService = {
  async getProducts() {
    try {
      const response = await productClient.get(ENDPOINTS.PRODUCTS.ALL);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch products.';
      throw new Error(message);
    }
  },

  async getProductById(id) {
    try {
      const response = await productClient.get(ENDPOINTS.PRODUCTS.SINGLE(id));
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch product details.';
      throw new Error(message);
    }
  },

  async getCategories() {
    try {
      const response = await productClient.get(ENDPOINTS.PRODUCTS.CATEGORIES);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch categories.';
      throw new Error(message);
    }
  },

  async getProductsByCategory(category) {
    try {
      const response = await productClient.get(
        ENDPOINTS.PRODUCTS.BY_CATEGORY(category),
      );
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch products for category.';
      throw new Error(message);
    }
  },
};

export default productService;
