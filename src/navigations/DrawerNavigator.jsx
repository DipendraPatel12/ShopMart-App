import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CustomDrawerContent from './CustomDrawerContent';
import { ROUTES, scale, colors } from '../constants';

const Drawer = createDrawerNavigator();

const renderCustomDrawerContent = props => <CustomDrawerContent {...props} />;

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={renderCustomDrawerContent}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: scale(280),
          backgroundColor: colors.background,
        },
        swipeEdgeWidth: 100,
      }}
    >
      <Drawer.Screen
        name={ROUTES.MAIN_TABS}
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
