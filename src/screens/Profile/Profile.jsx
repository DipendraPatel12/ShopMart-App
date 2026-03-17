import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#2196F3',
          height: 50,
          justifyContent: 'center',
          borderRadius: 40,
          width: 300,
          alignSelf: 'center',
        }}
        onPress={() => handleLogout()}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
