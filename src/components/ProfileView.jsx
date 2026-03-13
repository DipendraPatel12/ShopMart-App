import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ProfileView = () => {
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', gap: 10, padding: 10 }}
      activeOpacity={0.5}
    >
      <View style={{}}>
        <Image
          source={require('../assets/images/splash1.png')}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'grey',
            borderRadius: 50,
          }}
        ></Image>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ color: 'grey' }}>Welcome</Text>
        <Text style={{ fontWeight: 500, fontSize: 15 }}>Dipendra Patel</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileView;

const styles = StyleSheet.create({});
