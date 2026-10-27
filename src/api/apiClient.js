import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URLS } from './endpoints';

// 1. Auth Client (EscuelaJS API)
export const authClient = axios.create({
  baseURL: BASE_URLS.AUTH,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Product Client (FakeStore API)
export const productClient = axios.create({
  baseURL: BASE_URLS.PRODUCTS,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Simple request interceptor: attach token if present in AsyncStorage
authClient.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  authClient,
  productClient,
};
