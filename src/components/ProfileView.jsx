import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileView = () => {
  const { loading, user } = useSelector(state => state.auth);
  console.warn('user details', user);
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', gap: 10, padding: 10 }}
      activeOpacity={0.5}
    >
      <View style={{}}>
        <Image
          source={
            loading || !user
              ? require('../assets/images/splash1.png')
              : { uri: user ? user.avatar : '' }
          }
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'grey',
            borderRadius: 50,
          }}
        />
      </View>
      
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ color: 'grey' }}>
          {loading || !user ? '' : 'Welcome'}
        </Text>
        <Text style={{ fontWeight: 500, fontSize: 15 }}>
          {loading || !user ? '' : `${user?.name}`}
        </Text>
      </View>

    </TouchableOpacity>
  );
};

export default ProfileView;

const styles = StyleSheet.create({});
