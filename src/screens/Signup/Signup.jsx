import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
const Signup = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: 'Nicolas',
    email: 'nico@gmail.com',
    password: '1234',
    avatar: 'https://picsum.photos/800',
  });

  useEffect(() => {
    console.warn(userData);
  }, [userData]);

  const { token } = useSelector(state => state.auth);
  useEffect(() => {
    if (token) {
      navigation.navigate('MainTabs', {
        screen: 'Home',
      });
    }
  }, [token]);

  const signup = async () => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      Alert.alert('All field Required!');
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      Alert.alert('Password Did not Match!');
      return;
    }
    try {
      const res = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        Alert.alert('Registered Successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert('Signup Failed');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ padding: 30 }}>
        <View
          style={{ justifyContent: 'flex-start', gap: 10, marginBottom: 10 }}
        >
          <Text style={{ fontWeight: 400 }}>Name</Text>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="#B0BEC5"
            value={userData?.name}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              padding: 10,
              borderColor: '#B0BEC5',
              color: 'black',
            }}
            onChangeText={text => setUserData({ ...userData, name: text })}
          ></TextInput>
        </View>

        <View
          style={{ justifyContent: 'flex-start', gap: 10, marginBottom: 10 }}
        >
          <Text style={{ fontWeight: 400 }}>Email</Text>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="grey"
            value={userData?.email}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              padding: 10,
              borderColor: '#B0BEC5',
              color: 'black',
            }}
            onChangeText={text => setUserData({ ...userData, email: text })}
          ></TextInput>
        </View>

        <View
          style={{ justifyContent: 'flex-start', gap: 10, marginBottom: 10 }}
        >
          <Text style={{ fontWeight: 400 }}>Password</Text>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="grey"
            value={userData?.password}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              padding: 10,
              borderColor: '#B0BEC5',
              color: 'black',
            }}
            onChangeText={text => setUserData({ ...userData, password: text })}
          ></TextInput>
        </View>

        <View
          style={{ justifyContent: 'flex-start', gap: 10, marginBottom: 10 }}
        >
          <Text style={{ fontWeight: 400 }}>Re-type Password</Text>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="grey"
            value={userData?.confirmPassword}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              padding: 10,
              borderColor: '#B0BEC5',
              color: 'black',
            }}
            onChangeText={text =>
              setUserData({ ...userData, confirmPassword: text })
            }
          ></TextInput>
        </View>
        <View style={{ marginBottom: 30, flexDirection: 'row' }}>
          {/* <CheckBox></CheckBox> */}
          <Text>I agree with the </Text>
          <Text style={{ color: '#42A5F5' }}> Terms & Conditions</Text>
        </View>

        <TouchableOpacity
          style={{ width: 330, backgroundColor: '#42A5F5', borderRadius: 20 }}
          onPress={() => signup()}
        >
          <Text style={{ textAlign: 'center', padding: 16, color: 'white' }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginBottom: 40,
        }}
      >
        <Text>Or Login With</Text>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <TouchableOpacity>
            <FontAwesome5 name="facebook" size={35} color="#1877F2" />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome5 name="google" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#42A5F5' }}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
