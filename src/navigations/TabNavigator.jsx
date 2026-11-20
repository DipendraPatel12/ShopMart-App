import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home/Home';
import Cart from '../screens/cart/Cart';
import Profile from '../screens/profile/Profile';
import Favorite from '../screens/favorite/Favorite';

import ProfileView from '../components/profileView/ProfileView';
import HomeHeaderRight from '../components/homeHeaderRight/HomeHeaderRight';
import CartHeaderRight from '../components/cartHeaderRight/CartHeaderRight';
import TabBarIcon from '../components/tabBarIcon/TabBarIcon';
import { ROUTES } from '../constants';
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
        name={ROUTES.HOME}
        component={Home}
        options={{
          headerTitle: '',
          headerLeft: renderHomeHeaderLeft,
          headerRight: renderHomeHeaderRight,
          tabBarIcon: renderHomeIcon,
        }}
      />

      <Tab.Screen
        name={ROUTES.CART}
        component={Cart}
        options={{
          headerRight: renderCartHeaderRight,
          tabBarIcon: renderCartIcon,
        }}
      />

      <Tab.Screen
        name={ROUTES.FAVORITE}
        component={Favorite}
        options={{
          tabBarIcon: renderFavoriteIcon,
        }}
      />

      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
