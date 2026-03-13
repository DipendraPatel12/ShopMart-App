import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Splash1 = ({ navigation }) => {
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
            source={require('../../../assets/images/splash1.png')}
            style={{ width: 300, height: 300 }}
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
          <View
            style={{
              backgroundColor: '#B0BEC5',
              width: 10,
              height: 10,
              borderRadius: 50,
            }}
          ></View>
        </View>
        <View style={{ width: 200 }}>
          <Text style={{ fontSize: 20, fontWeight: 400, textAlign: 'center' }}>
            We Provide High Quality Product Just For You
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
          onPress={() => navigation.navigate('Splash2')}
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

export default Splash1;

const styles = StyleSheet.create({});
