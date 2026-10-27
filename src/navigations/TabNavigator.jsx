import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import Cart from '../screens/Cart/Cart';
import Profile from '../screens/Profile/Profile';
import Favorite from '../screens/Favorite/Favorite';

import ProfileView from '../components/ProfileView';
import HomeHeaderRight from '../components/HomeHeaderRight';
import CartHeaderRight from '../components/CartHeaderRight';
import TabBarIcon from '../components/TabBarIcon';
import { defaultTabScreenOptions } from './navigation.config';

const Tab = createBottomTabNavigator();

const renderHomeHeaderLeft = () => <ProfileView />;
const renderHomeHeaderRight = () => <HomeHeaderRight />;
const renderCartHeaderRight = () => <CartHeaderRight />;

const renderHomeIcon = ({ focused }) => (
  <TabBarIcon name="home" focused={focused} />
);
const renderCartIcon = ({ focused }) => (
  <TabBarIcon name="shopping-cart" focused={focused} />
);
const renderFavoriteIcon = ({ focused }) => (
  <TabBarIcon name="heart" focused={focused} />
);
const renderProfileIcon = ({ focused }) => (
  <TabBarIcon name="user" focused={focused} />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={defaultTabScreenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '',
          headerLeft: renderHomeHeaderLeft,
          headerRight: renderHomeHeaderRight,
          tabBarIcon: renderHomeIcon,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerRight: renderCartHeaderRight,
          tabBarIcon: renderCartIcon,
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: renderFavoriteIcon,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
