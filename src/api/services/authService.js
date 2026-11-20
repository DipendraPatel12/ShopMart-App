import AsyncStorage from '@react-native-async-storage/async-storage';
import { authClient } from '../apiClient';
import { ENDPOINTS } from '../endpoints';

const REGISTERED_USERS_KEY = '@registered_users';
const CURRENT_USER_KEY = '@current_user';

export const authService = {
  async register(userData) {
    try {
      const nameParts = (userData.name || '').trim().split(' ');
      const firstname = nameParts[0] || 'User';
      const lastname = nameParts.slice(1).join(' ') || 'Name';
      const email = (userData.email || '').trim().toLowerCase();
      const username = email.split('@')[0] || firstname.toLowerCase();

      const payload = {
        email,
        username,
        password: userData.password,
        name: {
          firstname,
          lastname,
        },
      };

      let apiResponse = null;
      try {
        const response = await authClient.post(
          ENDPOINTS.AUTH.REGISTER,
          payload,
        );
        apiResponse = response.data;
      } catch {
      }

      const raw = await AsyncStorage.getItem(REGISTERED_USERS_KEY);
      const existingUsers = raw ? JSON.parse(raw) : [];
      const filtered = existingUsers.filter(
        u => u.email.toLowerCase() !== email,
      );

      const newUser = {
        id: apiResponse?.id || Date.now(),
        name: userData.name?.trim() || `${firstname} ${lastname}`,
        email,
        username,
        password: userData.password,
        avatar: userData.avatar || 'https://picsum.photos/200',
      };

      filtered.push(newUser);
      await AsyncStorage.setItem(
        REGISTERED_USERS_KEY,
        JSON.stringify(filtered),
      );

      return {
        success: true,
        id: newUser.id,
        user: newUser,
      };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Registration failed. Please try again.';
      throw new Error(message);
    }
  },

  async login(credentials) {
    try {
      const input = (credentials.email || credentials.username || '')
        .trim()
        .toLowerCase();
      const password = credentials.password;

      const raw = await AsyncStorage.getItem(REGISTERED_USERS_KEY);
      const localUsers = raw ? JSON.parse(raw) : [];
      const localMatch = localUsers.find(
        u =>
          u.email.toLowerCase() === input ||
          u.username.toLowerCase() === input,
      );

      if (localMatch) {
        if (localMatch.password === password) {
          const token = `fake-token-${Date.now()}`;
          const userObj = {
            name: localMatch.name,
            email: localMatch.email,
            avatar: localMatch.avatar || 'https://picsum.photos/200',
          };
          await AsyncStorage.setItem(
            CURRENT_USER_KEY,
            JSON.stringify(userObj),
          );
          return {
            token,
            access_token: token,
            user: userObj,
          };
        }
        throw new Error('Invalid email or password.');
      }

      let fakestoreUsers = [];
      try {
        const usersResponse = await authClient.get(ENDPOINTS.AUTH.USERS);
        fakestoreUsers = usersResponse.data || [];
      } catch {
      }

      const apiMatch = fakestoreUsers.find(
        u =>
          u.email.toLowerCase() === input ||
          u.username.toLowerCase() === input,
      );

      const usernameToSubmit = apiMatch ? apiMatch.username : input.split('@')[0];

      const response = await authClient.post(ENDPOINTS.AUTH.LOGIN, {
        username: usernameToSubmit,
        password,
      });

      const token = response.data?.token || `fake-token-${Date.now()}`;
      const userObj = {
        name: apiMatch
          ? `${apiMatch.name.firstname} ${apiMatch.name.lastname}`
          : usernameToSubmit,
        email: apiMatch ? apiMatch.email : credentials.email,
        avatar: 'https://picsum.photos/200',
      };

      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userObj));

      return {
        token,
        access_token: token,
        user: userObj,
      };
    } catch (error) {
      const message =
        error.response?.data ||
        error.message ||
        'Login failed. Please check your credentials.';
      throw new Error(
        typeof message === 'string'
          ? message
          : 'Invalid email or password. Please try again.',
      );
    }
  },

  async getProfile() {
    try {
      const raw = await AsyncStorage.getItem(CURRENT_USER_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
      return {
        name: 'User',
        email: 'user@example.com',
        avatar: 'https://picsum.photos/200',
      };
    } catch {
      return {
        name: 'User',
        email: 'user@example.com',
        avatar: 'https://picsum.photos/200',
      };
    }
  },
};

export default authService;
