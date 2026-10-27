import { authClient } from '../apiClient';
import { ENDPOINTS } from '../endpoints';

export const authService = {
  async login(credentials) {
    try {
      const response = await authClient.post(
        ENDPOINTS.AUTH.LOGIN,
        credentials,
      );
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Login failed. Please check your credentials.';
      throw new Error(message);
    }
  },

  async register(userData) {
    try {
      const response = await authClient.post(
        ENDPOINTS.AUTH.REGISTER,
        userData,
      );
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Registration failed. Please try again.';
      throw new Error(message);
    }
  },

  async getProfile() {
    try {
      const response = await authClient.get(ENDPOINTS.AUTH.PROFILE);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch user profile.';
      throw new Error(message);
    }
  },
};

export default authService;
