import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';

import Home from '../screens/Home/Home';
import Cart from '../screens/Cart/Cart';
import Profile from '../screens/Profile/Profile';
import Favorite from '../screens/Favorite/Favorite';

import ProfileView from '../components/ProfileView';
import Back from '../components/Back';
import { clearCart } from '../redux/slices/cartSlice';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [searchBar, setSearchBar] = useState(false);
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 75,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          marginVertical: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: '',
          headerShadowVisible: false,
          headerLeft: () => <ProfileView />,
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {searchBar ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: 300,
                    borderWidth: 0.5,
                    backgroundColor: '#ECEFF1',
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                >
                  <TextInput
                    placeholder="Search here..."
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{
                      flex: 1,
                      paddingLeft: 10,
                      color: 'black',
                    }}
                  />

                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => setSearchBar(false)}
                  >
                    <FontAwesome5 name="window-close" size={22} color="grey" />
                  </TouchableOpacity>
                </View>
              ) : (
                <>
                  <TouchableOpacity onPress={() => setSearchBar(true)}>
                    <FontAwesome5 name="search" size={22} color="grey" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.navigate('Notification')}
                  >
                    <FontAwesome5 name="bell" size={22} color="grey" />
                  </TouchableOpacity>
                </>
              )}
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
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <Back />,
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
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <Back />,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="heart"
              size={22}
              color={focused ? '#1E88E5' : 'grey'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <Back />,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user"
              size={22}
              color={focused ? '#1E88E5' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
