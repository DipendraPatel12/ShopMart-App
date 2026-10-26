import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

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
import Back from '../components/Back';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ isFirstLaunch }) => {
  const token = useSelector(state => state.auth.token);

  return (
    <Stack.Navigator>
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
            options={{
              headerTitle: 'Product Details',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerLeft: () => <Back />,
            }}
          />

          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{
              headerTitle: 'Notification',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerLeft: () => <Back />,
            }}
          />

          <Stack.Screen
            name="CategoryProduct"
            component={CategoryProduct}
            options={({ route }) => ({
              headerTitle: route.params?.categoryName || 'Products',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerLeft: () => <Back />,
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
            options={{
              headerTitle: 'Login',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerLeft: () => <Back />,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerBackVisible: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
