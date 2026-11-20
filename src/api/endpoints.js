export const BASE_URLS = {
  AUTH: 'https://fakestoreapi.com',
  PRODUCTS: 'https://fakestoreapi.com',
};

export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/users',
    USERS: '/users',
    PROFILE: '/auth/profile',
  },
  PRODUCTS: {
    ALL: '/products',
    SINGLE: id => `/products/${id}`,
    CATEGORIES: '/products/categories',
    BY_CATEGORY: category => `/products/category/${category}`,
  },
};
