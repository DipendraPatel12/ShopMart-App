import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash1 from '../screens/splashScreens/splash1/Splash1';
import Splash2 from '../screens/splashScreens/splash2/Splash2';
import Splash3 from '../screens/splashScreens/splash3/Splash3';
import Signup from '../screens/Signup/Signup';
import Login from '../screens/Login/Login';

import TabNavigator from './TabNavigator';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Notification from '../screens/Notification/Notification';
import CategoryProduct from '../screens/CategoryProducts/CategoryProducts';
import Success from '../screens/Success/Success';

import useAuth from '../hooks/useAuth';
import { defaultStackScreenOptions } from './navigation.config';

const Stack = createNativeStackNavigator();

const renderNoHeaderLeft = () => null;

const StackNavigator = ({ isFirstLaunch }) => {
  const { token } = useAuth();

  return (
    <Stack.Navigator screenOptions={defaultStackScreenOptions}>
      {token ? (
        <>
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ headerTitle: 'Product Details' }}
          />

          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerTitle: 'Notification' }}
          />

          <Stack.Screen
            name="CategoryProduct"
            component={CategoryProduct}
            options={({ route }) => ({
              headerTitle: route.params?.categoryName || 'Products',
            })}
          />

          <Stack.Screen
            name="Success"
            component={Success}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          {isFirstLaunch && (
            <>
              <Stack.Screen
                name="Splash1"
                component={Splash1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splash2"
                component={Splash2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splash3"
                component={Splash3}
                options={{ headerShown: false }}
              />
            </>
          )}

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerTitle: 'Login' }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerTitle: 'Sign Up',
              headerLeft: renderNoHeaderLeft,
              headerBackVisible: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

