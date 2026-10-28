export const BASE_URLS = {
  AUTH: 'https://api.escuelajs.co/api/v1',
  PRODUCTS: 'https://fakestoreapi.com',
};

export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/users/',
    PROFILE: '/auth/profile',
  },
  PRODUCTS: {
    ALL: '/products',
    SINGLE: id => `/products/${id}`,
    CATEGORIES: '/products/categories',
    BY_CATEGORY: category => `/products/category/${category}`,
  },
};
