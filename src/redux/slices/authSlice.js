import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from '../../api/services/authService';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authService.login(userData);
      await AsyncStorage.setItem('token', data?.access_token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authService.register(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUserProfile = createAsyncThunk(
  'auth/getUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authService.getProfile();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const checkFirstLaunch = createAsyncThunk(
  'auth/checkFirstLaunch',
  async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      return hasLaunched !== 'true';
    } catch {
      return false;
    }
  },
);

export const loadToken = createAsyncThunk('auth/loadToken', async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch {
    return null;
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(error)
  }
  return null;
});

export const finishOnboarding = createAsyncThunk(
  'auth/finishOnboarding',
  async () => {
    try {
      await AsyncStorage.setItem('hasLaunched', 'true');
    } catch (error) {
      console.log(error)
    }
    return false;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    success: false,
    authChecked: false,
    isFirstLaunch: false,
  },
  reducers: {
    resetAuthStatus: state => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: builder => {
    builder
      // Login
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload?.access_token;
        state.success = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Register
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // User Profile
      .addCase(getUserProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // First Launch
      .addCase(checkFirstLaunch.fulfilled, (state, action) => {
        state.isFirstLaunch = action.payload;
      })
      .addCase(checkFirstLaunch.rejected, state => {
        state.isFirstLaunch = false;
      })

      // Load Token
      .addCase(loadToken.pending, state => {
        state.authChecked = false;
      })
      .addCase(loadToken.fulfilled, (state, action) => {
        state.token = action.payload;
        state.authChecked = true;
      })
      .addCase(loadToken.rejected, state => {
        state.token = null;
        state.authChecked = true;
      })

      // Logout
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.error = null;
        state.success = false;
      })

      // Finish Onboarding
      .addCase(finishOnboarding.fulfilled, state => {
        state.isFirstLaunch = false;
      });
  },
});

export const { resetAuthStatus } = authSlice.actions;

export default authSlice.reducer;