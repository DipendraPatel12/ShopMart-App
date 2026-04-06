import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { CommonActions } from '@react-navigation/native';
const Profile = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Signup' }, { name: 'Login' }],
      }),
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => handleLogout()}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  logoutBtn: {
    backgroundColor: '#2196F3',
    height: 50,
    justifyContent: 'center',
    borderRadius: 40,
    width: 300,
    alignSelf: 'center',
  },
});
