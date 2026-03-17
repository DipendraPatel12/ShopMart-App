import { TouchableOpacity, Text, View, Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash1 from '../screens/splashScreens/splash1/Splash1';
import Splash2 from '../screens/splashScreens/splash2/Splash2';
import Splash3 from '../screens/splashScreens/splash3/Splash3';
import Home from '../screens/Home/Home';
import Signup from '../screens/Signup/Signup';
import Login from '../screens/Login/Login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProfileView from '../components/ProfileView';
import TabNavigator from './TabNavigator';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Notification from '../screens/Notification/Notification';
import CategoryProduct from '../screens/CategoryProducts/CategoryProducts';
import Success from '../screens/Success/Success';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 4,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: 'grey',
                }}
              >
                {'<'}
              </Text>
            </TouchableOpacity>
          ),
        })}
      />

      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerLeft: () => <ProfileView></ProfileView>,
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <TouchableOpacity>
                <FontAwesome5 name="search" size={22} color="grey" />
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesome5 name="bell" size={22} color="grey" />
              </TouchableOpacity>
            </View>
          ),
        }}
      /> */}

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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 4,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: 'grey',
                }}
              >
                <FontAwesome5 name="angle-left" size={22} color={'#1E88E5'} />
              </Text>
            </TouchableOpacity>
          ),
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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 4,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: 'grey',
                }}
              >
                <FontAwesome5 name="angle-left" size={22} color={'#1E88E5'} />
              </Text>
            </TouchableOpacity>
          ),
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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 4,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: 'grey',
                }}
              >
                <FontAwesome5 name="angle-left" size={22} color={'#1E88E5'} />
              </Text>
            </TouchableOpacity>
          ),
        })}
      ></Stack.Screen>

      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
