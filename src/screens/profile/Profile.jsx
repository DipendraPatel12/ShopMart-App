import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { AppImage } from '../../lib';
import styles from './Profile.styles';

const Profile = () => {
  const { user, logout, fetchProfile } = useAuth();

  useEffect(() => {
    if (!user) {
      fetchProfile();
    }
  }, [user, fetchProfile]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      Alert.alert('Logout failed', 'Could not log out. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.profileHeader}>
          <AppImage
            source={user.avatar || 'https://picsum.photos/200'}
            style={styles.avatar}
          />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
