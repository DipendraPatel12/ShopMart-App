import * as Keychain from 'react-native-keychain';

const SERVICE_NAME = 'com.ecommerceappnew.auth';
const TOKEN_KEY = 'auth_token';

export const setAuthToken = async token => {
  if (!token) return false;
  try {
    await Keychain.setGenericPassword(TOKEN_KEY, token, {
      service: SERVICE_NAME,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
    return true;
  } catch (error) {
    console.warn('secureStorage: Failed to set auth token', error);
    return false;
  }
};

export const getAuthToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword({
      service: SERVICE_NAME,
    });
    if (credentials && credentials.password) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.warn('secureStorage: Failed to get auth token', error);
    return null;
  }
};

export const removeAuthToken = async () => {
  try {
    await Keychain.resetGenericPassword({
      service: SERVICE_NAME,
    });
    return true;
  } catch (error) {
    console.warn('secureStorage: Failed to remove auth token', error);
    return false;
  }
};

export const secureStorage = {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
};

export default secureStorage;
