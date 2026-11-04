import { PermissionsAndroid, Platform } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';

const CHANNEL_ID = 'general';
let isChannelCreated = false;

// 1. Ensures the general notification channel exists on Android
const ensureChannel = async () => {
  if (isChannelCreated) return CHANNEL_ID;

  try {
    await notifee.createChannel({
      id: CHANNEL_ID,
      name: 'General Notifications',
      importance: AndroidImportance.HIGH,
      sound: 'default',
      vibration: true,
    });
    isChannelCreated = true;
  } catch (error) {
    console.warn('AppNotification: channel error', error);
  }

  return CHANNEL_ID;
};

// 2. Asks user for notification permission (Android 13+ and iOS)
export const requestPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      // Android 13+ (API 33+) requires runtime POST_NOTIFICATIONS permission
      if (Platform.Version >= 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
      // On Android 12 and below, notifications are granted by default at install
      return true;
    }

    return await notifee.requestPermission();
  } catch (error) {
    console.warn('AppNotification: permission error', error);
    return null;
  }
};

// 3. Shows the notification popup on the phone
export const display = async ({ title, body, data = {} }) => {
  try {
    const channelId = await ensureChannel();

    return await notifee.displayNotification({
      title,
      body,
      data,
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        pressAction: { id: 'default' },
      },
    });
  } catch (error) {
    console.warn('AppNotification: display error', error);
    return null;
  }
};

export const AppNotification = {
  requestPermission,
  display,
};

export default AppNotification;
