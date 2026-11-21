import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { AppImage, AppIcon } from '../../lib';
import { colors, moderateScale } from '../../constants';
import styles from './ProfileView.styles';

const ProfileView = () => {
  const { user, loading } = useAuth();
  const navigation = useNavigation();

  const handleToggleDrawer = () => {
    const parentDrawer = navigation.getParent();
    if (parentDrawer?.toggleDrawer) {
      parentDrawer.toggleDrawer();
    } else {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handleToggleDrawer}
    >
      <View style={styles.menuIconContainer}>
        <AppIcon
          name="bars"
          size={moderateScale(18)}
          color={colors.textDark}
        />
      </View>

      <View>
        <AppImage
          source={
            user?.avatar
              ? user.avatar
              : require('../../assets/images/splash1.png')
          }
          style={styles.avatar}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>
          {loading || !user ? '' : 'Welcome'}
        </Text>
        <Text style={styles.userNameText} numberOfLines={1}>
          {loading || !user ? 'Guest' : user.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileView;
