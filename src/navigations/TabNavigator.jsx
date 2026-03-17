import { TouchableOpacity, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Cart from '../screens/Cart/Cart';
import Profile from '../screens/Profile/Profile';
import Favorite from '../screens/Favorite/Favorite';
import ProfileView from '../components/ProfileView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: 60 } }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: '',
          headerShadowVisible: false,
          headerLeft: () => <ProfileView></ProfileView>,
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 20, padding: 10 }}>
              <TouchableOpacity>
                <FontAwesome5 name="search" size={22} color="grey" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}
              >
                <FontAwesome5 name="bell" size={22} color="grey" />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              size={22}
              color={focused ? '#1E88E5' : 'grey'}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
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
                marginLeft: 10,
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
          headerRight: () => (
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 4,
                borderRadius: 10,
                marginRight: 10,
                paddingVertical: 9,
                paddingHorizontal: 12,
              }}
              onPress={() => dispatch(clearCart())}
            >
              <FontAwesome5 name="trash" size={20} color="grey" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="shopping-cart"
              size={22}
              color={focused ? '#1E88E5' : 'grey'}
            />
          ),
        })}
      ></Tab.Screen>

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
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
                marginLeft: 10,
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
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="heart"
              size={22}
              color={focused ? '#1E88E5' : 'grey'}
            />
          ),
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
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
                marginLeft: 10,
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
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user"
              size={22}
              color={focused ? '#1E88E5' : 'grey'}
            />
          ),
        })}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
