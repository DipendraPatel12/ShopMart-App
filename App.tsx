import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import RootNavigator from './src/navigations/RootNavigator';
import { AppNotification } from './src/lib';

const App = () => {
  useEffect(() => {
    AppNotification.requestPermission();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#FFFFFF"
        />
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;