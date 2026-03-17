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
import { loginUser } from '../../redux/slices/authSlice';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('dipendra@gmail.com');
  const [password, setPassword] = useState('1234');

  const { loading, error, token } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      navigation.navigate('MainTabs', {
        screen: 'Home',
      });
    }
  }, [token]);

  // useEffect(() => {
  //   if (error) {
  //     Alert.alert('Login Failed', error);
  //   }
  // }, [error]);

  useEffect(() => {
    console.warn(email, password);
  }, [email, password]);

  const login = async () => {
    if (!email || !password) {
      Alert.alert('Please Fill All the Fields');
      return;
    }
    dispatch(
      loginUser({
        email: email.trim(),
        password: password.trim(),
      }),
    );
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
          <Text style={{ fontWeight: 400 }}>Email</Text>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="grey"
            value={email}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              padding: 10,
              borderColor: '#B0BEC5',
              color: 'black',
            }}
            onChangeText={text => setEmail(text)}
          ></TextInput>
        </View>

        <View
          style={{ justifyContent: 'flex-start', gap: 10, marginBottom: 10 }}
        >
          <Text style={{ fontWeight: 400 }}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="grey"
            value={password}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              padding: 10,
              borderColor: '#B0BEC5',
              color: 'black',
            }}
            // secureTextEntry
            onChangeText={text => setPassword(text)}
          ></TextInput>
        </View>

        <TouchableOpacity style={{ marginBottom: 20 }}>
          <Text
            style={{ color: '#42A5F5', textAlign: 'right', marginRight: 5 }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: 330, backgroundColor: '#42A5F5', borderRadius: 20 }}
          onPress={() => login()}
        >
          {loading ? (
            <Text
              style={{
                textAlign: 'center',
                padding: 16,
                color: 'white',
                fontWeight: 500,
              }}
            >
              Logging in...
            </Text>
          ) : (
            <Text style={{ textAlign: 'center', padding: 16, color: 'white' }}>
              Login
            </Text>
          )}
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
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#42A5F5' }}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
