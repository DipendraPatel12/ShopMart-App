import AsyncStorage from '@react-native-async-storage/async-storage';

export const completeOnboarding = async () => {
    await AsyncStorage.setItem('hasLaunched', 'true');
};