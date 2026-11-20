import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash1 from '../screens/splashScreens/splash1/Splash1';
import Splash2 from '../screens/splashScreens/splash2/Splash2';
import Splash3 from '../screens/splashScreens/splash3/Splash3';
import Signup from '../screens/signup/Signup';
import Login from '../screens/login/Login';

import TabNavigator from './TabNavigator';
import ProductDetail from '../screens/productDetail/ProductDetail';
import CategoryProduct from '../screens/categoryProducts/CategoryProducts';
import Success from '../screens/success/Success';

import useAuth from '../hooks/useAuth';
import { ROUTES } from '../constants';
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
            name={ROUTES.MAIN_TABS}
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={ROUTES.PRODUCT_DETAIL}
            component={ProductDetail}
            options={{ headerTitle: 'Product Details' }}
          />

          <Stack.Screen
            name={ROUTES.CATEGORY_PRODUCT}
            component={CategoryProduct}
            options={({ route }) => ({
              headerTitle: route.params?.categoryName || 'Products',
            })}
          />

          <Stack.Screen
            name={ROUTES.SUCCESS}
            component={Success}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          {isFirstLaunch && (
            <>
              <Stack.Screen
                name={ROUTES.SPLASH1}
                component={Splash1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={ROUTES.SPLASH2}
                component={Splash2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={ROUTES.SPLASH3}
                component={Splash3}
                options={{ headerShown: false }}
              />
            </>
          )}

          <Stack.Screen
            name={ROUTES.LOGIN}
            component={Login}
            options={{ headerTitle: 'Login' }}
          />
          <Stack.Screen
            name={ROUTES.SIGNUP}
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
