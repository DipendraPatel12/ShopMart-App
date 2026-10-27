import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import { AppImage } from '../lib';
import styles from './ProfileView.styles';

const ProfileView = () => {
  const { user, loading } = useAuth();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
    >
      <View>
        <AppImage
          source={
            user?.avatar
              ? user.avatar
              : require('../assets/images/splash1.png')
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
