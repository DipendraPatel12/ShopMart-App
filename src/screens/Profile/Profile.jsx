import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/slices/authSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      console.log('Logout successful');
    } catch (error) {
      console.log('Logout error:', error);
      Alert.alert('Logout failed', 'Could not log out. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
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
  },
  logoutBtn: {
    backgroundColor: '#2196F3',
    height: 50,
    justifyContent: 'center',
    borderRadius: 40,
    width: 300,
    alignSelf: 'center',
    marginTop: 20,
  },
  logoutText: {
    textAlign: 'center',
    color: 'white',
  },
});
