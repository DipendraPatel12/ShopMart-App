import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URLS } from './endpoints';

export const authClient = axios.create({
  baseURL: BASE_URLS.AUTH,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const productClient = axios.create({
  baseURL: BASE_URLS.PRODUCTS,
  headers: {
    'Content-Type': 'application/json',
  },
});


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
