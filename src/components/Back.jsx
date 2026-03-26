import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
const Back = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        borderRadius: 10,
        marginLeft: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          padding: 5,
          paddingLeft: 15,
          paddingRight: 15,
          color: 'grey',
        }}
      >
        <FontAwesome5 name="angle-left" size={22} color={'#1E88E5'} />
      </Text>
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({});
