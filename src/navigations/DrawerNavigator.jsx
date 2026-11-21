import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Cart from '../screens/cart/Cart';
import Favorite from '../screens/favorite/Favorite';
import Profile from '../screens/profile/Profile';
import { AppIcon } from '../lib';
import { ROUTES, scale, colors } from '../constants';

const Drawer = createDrawerNavigator();

const renderHomeDrawerIcon = ({ color, size }) => (
  <AppIcon name="home" size={size} color={color} />
);
const renderCartDrawerIcon = ({ color, size }) => (
  <AppIcon name="shopping-cart" size={size} color={color} />
);
const renderFavoriteDrawerIcon = ({ color, size }) => (
  <AppIcon name="heart" size={size} color={color} />
);
const renderProfileDrawerIcon = ({ color, size }) => (
  <AppIcon name="user" size={size} color={color} />
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // Default drawer mode: drawerContent is omitted so React Navigation uses built-in DrawerItemList
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: scale(200),
          backgroundColor: colors.background,
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.textDark,
        drawerActiveBackgroundColor: colors.primaryBg,
        swipeEdgeWidth: 100,
      }}
    >
      <Drawer.Screen
        name={ROUTES.MAIN_TABS}
        component={TabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: renderHomeDrawerIcon,
        }}
      />
      <Drawer.Screen
        name={ROUTES.CART}
        component={Cart}
        options={{
          drawerLabel: 'My Cart',
          drawerIcon: renderCartDrawerIcon,
        }}
      />
      <Drawer.Screen
        name={ROUTES.FAVORITE}
        component={Favorite}
        options={{
          drawerLabel: 'My Favories',
          drawerIcon: renderFavoriteDrawerIcon,
        }}
      />
      <Drawer.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          drawerLabel: 'My Profile',
          drawerIcon: renderProfileDrawerIcon,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
