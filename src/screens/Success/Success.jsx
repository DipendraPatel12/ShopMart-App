import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Success = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/images/payment.jpg')}
        style={{ width: 300, height: 200 }}
      ></Image>

      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}>
        <Text style={{ fontSize: 25 }}>Thank You</Text>
        <Text style={{ fontSize: 25 }}>For Shopping!!!</Text>
        <Text style={{ color: '#B0BEC5', fontWeight: 800 }}>
          Your Order has been placed
        </Text>
        <Text style={{ color: '#B0BEC5', fontWeight: 800 }}>successfully</Text>
      </View>

      <TouchableOpacity
        style={styles.continueBtn}
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate('MainTabs');
        }}
      >
        <Text style={styles.continueText}>Continue Shopping </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  continueBtn: {
    backgroundColor: '#2196F3',
    width: 200,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    color: 'white',
    fontWeight: 800,
    fontSize: 15,
  },
});
