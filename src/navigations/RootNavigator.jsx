import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import StackNavigator from './StackNavigator';
import Loading from '../components/Loading';

const RootNavigator = () => {
  const { authChecked, isFirstLaunch, initializeAuth } = useAuth();
  const [launchChecked, setLaunchChecked] = useState(false);

  useEffect(() => {
    const checkApp = async () => {
      await initializeAuth();
      setLaunchChecked(true);
    };

    checkApp();
  }, [initializeAuth]);

  if (!authChecked || !launchChecked) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <StackNavigator isFirstLaunch={isFirstLaunch} />
    </NavigationContainer>
  );
};

export default RootNavigator;

