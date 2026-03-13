import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Splash2 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center', gap: 40 }}>
        <View>
          <Image
            source={require('../../../assets/images/deliveryBoy.png')}
            style={{ width: 400, height: 300 }}
          ></Image>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: '#B0BEC5',
              width: 10,
              height: 10,
              borderRadius: 50,
            }}
          ></View>
          <View
            style={{
              backgroundColor: '#42A5F5',
              width: 20,
              height: 10,
              borderRadius: 50,
            }}
          ></View>
          <View
            style={{
              backgroundColor: '#B0BEC5',
              width: 10,
              height: 10,
              borderRadius: 50,
            }}
          ></View>
        </View>
        <View style={{ width: 150 }}>
          <Text style={{ fontSize: 20, fontWeight: 400, textAlign: 'center' }}>
            We Ensure Fast Delivery Of Your Order
          </Text>
        </View>
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: '#42A5F5',
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Splash3')}
        >
          <Text style={{ fontWeight: 500, fontSize: 20, color: 'white' }}>
            Next
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{ color: '#42A5F5', fontSize: 20, textAlign: 'center' }}>
            skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash2;

const styles = StyleSheet.create({});
