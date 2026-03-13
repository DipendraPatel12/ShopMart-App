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
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error, token } = useSelector(state => state.auth);

  useEffect(() => {
    console.warn(username, password);
  }, [username, password]);

  const login = async () => {
    if (!username || !password) {
      Alert.alert('Please Fill All the Fields');
      return;
    }
    dispatch(
      loginUser({
        username,
        password,
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
            value={username}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              padding: 10,
              borderColor: '#B0BEC5',
              color: 'black',
            }}
            onChangeText={text => setUserName(text)}
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
          <Text style={{ textAlign: 'center', padding: 16, color: 'white' }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginBottom: 10,
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
