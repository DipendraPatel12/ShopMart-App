import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  loginUser,
  RegisterUser,
  getUserProfile,
  logoutUser,
  finishOnboarding,
  resetAuthStatus,
  loadToken,
  checkFirstLaunch,
} from '../redux/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const {
    user,
    token,
    loading,
    error,
    success,
    authChecked,
    isFirstLaunch,
  } = useSelector(state => state.auth);

  const login = useCallback(
    async credentials => {
      return await dispatch(loginUser(credentials)).unwrap();
    },
    [dispatch],
  );

  const register = useCallback(
    async userData => {
      return await dispatch(RegisterUser(userData)).unwrap();
    },
    [dispatch],
  );

  const fetchProfile = useCallback(async () => {
    return await dispatch(getUserProfile()).unwrap();
  }, [dispatch]);

  const logout = useCallback(async () => {
    return await dispatch(logoutUser()).unwrap();
  }, [dispatch]);

  const completeOnboarding = useCallback(async () => {
    return await dispatch(finishOnboarding()).unwrap();
  }, [dispatch]);

  const initializeAuth = useCallback(async () => {
    await dispatch(loadToken());
    await dispatch(checkFirstLaunch());
  }, [dispatch]);

  const clearAuthStatus = useCallback(() => {
    dispatch(resetAuthStatus());
  }, [dispatch]);

  return {
    user,
    token,
    isAuthenticated: Boolean(token),
    loading,
    error,
    success,
    authChecked,
    isFirstLaunch,
    login,
    register,
    fetchProfile,
    logout,
    completeOnboarding,
    initializeAuth,
    clearAuthStatus,
  };
};

export default useAuth;
