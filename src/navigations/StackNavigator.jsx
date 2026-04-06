import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash1 from '../screens/splashScreens/splash1/Splash1';
import Splash2 from '../screens/splashScreens/splash2/Splash2';
import Splash3 from '../screens/splashScreens/splash3/Splash3';
import Home from '../screens/Home/Home';
import Signup from '../screens/Signup/Signup';
import Login from '../screens/Login/Login';

import TabNavigator from './TabNavigator';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Notification from '../screens/Notification/Notification';
import CategoryProduct from '../screens/CategoryProducts/CategoryProducts';
import Success from '../screens/Success/Success';

import Back from '../components/Back';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setUserToken(token);
    };

    checkToken();
  }, []);

  return (
    <Stack.Navigator>
      {userToken ? (
        <>
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={({ navigation }) => ({
              headerTitle: 'Product Details',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 20 },
              headerShadowVisible: false,
              headerLeft: () => <Back></Back>,
            })}
          />

          <Stack.Screen
            name="Notification"
            component={Notification}
            options={({ navigation }) => ({
              headerTitle: 'Notification',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 20 },
              headerShadowVisible: false,
              headerLeft: () => <Back></Back>,
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="CategoryProduct"
            component={CategoryProduct}
            options={({ navigation, route }) => ({
              headerTitle: route?.params?.categoryName || 'Products',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 20 },
              headerShadowVisible: false,
              headerLeft: () => <Back></Back>,
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="Success"
            component={Success}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 25 },
              headerShadowVisible: false,
              headerBackVisible: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 25 },
              headerShadowVisible: false,
              headerLeft: () => <Back></Back>,
            })}
          />
        </>
      ) : (
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

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 25 },
              headerShadowVisible: false,
              headerBackVisible: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 25 },
              headerShadowVisible: false,
              headerLeft: () => <Back></Back>,
            })}
          />
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={({ navigation }) => ({
              headerTitle: 'Product Details',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 20 },
              headerShadowVisible: false,
              headerLeft: () => <Back></Back>,
            })}
          />

          <Stack.Screen
            name="Notification"
            component={Notification}
            options={({ navigation }) => ({
              headerTitle: 'Notification',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 20 },
              headerShadowVisible: false,
              headerLeft: () => <Back></Back>,
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="CategoryProduct"
            component={CategoryProduct}
            options={({ navigation, route }) => ({
              headerTitle: route?.params?.categoryName || 'Products',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 20 },
              headerShadowVisible: false,
              headerLeft: () => <Back></Back>,
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="Success"
            component={Success}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
