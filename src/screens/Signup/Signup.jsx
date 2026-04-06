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
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../redux/slices/authSlice';

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: 'https://picsum.photos/800',
  });

  // useEffect(() => {
  //   console.warn(userData);
  // }, [userData]);

  const { token, success, loading, error } = useSelector(state => state.auth);

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

    dispatch(RegisterUser(userData));

    setUserData({
      name: '',
      email: '',
      password: '',
      avatar: 'https://picsum.photos/800',
    });
  };

  if (success) {
    Alert.alert('Registered Successfully');
    // navigation.navigate('Login');
  }

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
            onChangeText={text =>
              setUserData({ ...userData, name: text.trim() })
            }
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
            onChangeText={text =>
              setUserData({ ...userData, email: text.trim() })
            }
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
            onChangeText={text =>
              setUserData({ ...userData, password: text.trim() })
            }
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
              setUserData({ ...userData, confirmPassword: text.trim() })
            }
          ></TextInput>
        </View>
        <View style={{ marginBottom: 30, flexDirection: 'row' }}>
          <Text>I agree with the </Text>
          <Text style={{ color: '#42A5F5' }}> Terms & Conditions</Text>
        </View>

        <TouchableOpacity
          style={{ width: 330, backgroundColor: '#42A5F5', borderRadius: 20 }}
          onPress={() => signup()}
        >
          <Text style={{ textAlign: 'center', padding: 16, color: 'white' }}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              color: 'red',
              fontWeight: '500',
            }}
          >
            {error}
          </Text>
        </View>
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
