import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import useAuth from '../hooks/useAuth';
import { AppImage, AppIcon } from '../lib';
import { ROUTES, colors, moderateScale } from '../constants';
import styles from './CustomDrawerContent.styles';

const MENU_ITEMS = [
  { label: 'Home', screen: ROUTES.HOME, icon: 'home' },
  { label: 'Cart', screen: ROUTES.CART, icon: 'shopping-cart' },
  { label: 'Favorites', screen: ROUTES.FAVORITE, icon: 'heart' },
  { label: 'Profile', screen: ROUTES.PROFILE, icon: 'user' },
];

const CustomDrawerContent = props => {
  const { user, logout } = useAuth();

  const handleNavigate = screen => {
    props.navigation.navigate(ROUTES.MAIN_TABS, { screen });
    props.navigation.closeDrawer();
  };

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log Out',
        style: 'destructive',
        onPress: async () => {
          props.navigation.closeDrawer();
          await logout();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerScrollView}
      >
        <View style={styles.profileHeader}>
          <AppImage
            source={
              user?.avatar
                ? user.avatar
                : require('../assets/images/splash1.png')
            }
            style={styles.avatar}
          />
          <Text style={styles.userName}>{user?.name || 'Guest User'}</Text>
          <Text style={styles.userEmail}>
            {user?.email || 'guest@example.com'}
          </Text>
        </View>

        <View style={styles.menuItemsContainer}>
          {MENU_ITEMS.map(item => (
            <TouchableOpacity
              key={item.screen}
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleNavigate(item.screen)}
            >
              <AppIcon
                name={item.icon}
                size={moderateScale(18)}
                color={colors.primary}
              />
              <Text style={styles.menuItemText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutBtn}
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <AppIcon
            name="sign-out-alt"
            size={moderateScale(18)}
            color={colors.error}
          />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;