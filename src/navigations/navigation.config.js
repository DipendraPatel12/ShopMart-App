import React from 'react';
import Back from '../components/Back';
import {
  colors,
  verticalScale,
  typography,
} from '../constants';

export const defaultStackScreenOptions = {
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerLeft: () => <Back />,
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerTitleStyle: {
    color: colors.textDark,
    fontWeight: typography.weight.semiBold,
    fontSize: typography.size.lg,
  },
};
  
export const defaultTabScreenOptions = {
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerTitleStyle: {
    color: colors.textDark,
    fontWeight: typography.weight.semiBold,
    fontSize: typography.size.lg,
  },
  tabBarStyle: {
    height: verticalScale(65),
    borderTopWidth: 0,
    backgroundColor: colors.background,
    elevation: 8,
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: -2 },
  },
  tabBarItemStyle: {
    paddingVertical: verticalScale(6),
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.textMuted,
};

export default {
  defaultStackScreenOptions,
  defaultTabScreenOptions,
};
