import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { loadToken, checkFirstLaunch } from '../redux/slices/authSlice';

import StackNavigator from './StackNavigator';

const RootNavigator = () => {
  const dispatch = useDispatch();

  const authChecked = useSelector(state => state.auth.authChecked);
  const isFirstLaunch = useSelector(state => state.auth.isFirstLaunch);
  const [launchChecked, setLaunchChecked] = useState(false);


  useEffect(() => {
    const checkApp = async () => {
      await dispatch(loadToken());
      await dispatch(checkFirstLaunch());

      setLaunchChecked(true);
    };

    checkApp();
  }, [dispatch]);

  if (!authChecked || !launchChecked) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <ActivityIndicator size="large" color="#1E88E5" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StackNavigator isFirstLaunch={isFirstLaunch} />
    </NavigationContainer>
  );
};

export default RootNavigator;
