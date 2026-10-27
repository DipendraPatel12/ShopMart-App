import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { AppImage } from '../../lib';

const Profile = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 40,
    gap: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ECEFF1',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37474F',
  },
  userEmail: {
    fontSize: 14,
    color: 'grey',
  },
  logoutBtn: {
    backgroundColor: '#2196F3',
    height: 50,
    justifyContent: 'center',
    borderRadius: 40,
    width: '100%',
    alignSelf: 'center',
  },
  logoutText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
