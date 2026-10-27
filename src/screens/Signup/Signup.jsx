import React, { useEffect } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Signup = ({ navigation }) => {
  const { register, success, loading, error, clearAuthStatus } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (success) {
      Alert.alert('Success', 'Registered Successfully', [
        {
          text: 'OK',
          onPress: () => {
            clearAuthStatus();
            navigation.navigate('Login');
          },
        },
      ]);
    }
  }, [success, navigation, clearAuthStatus]);

  const handleSignup = async formData => {
    try {
      clearAuthStatus();
      await register({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        avatar: 'https://picsum.photos/800',
      });
      reset();
    } catch (err) {
      // Error handled by hook and displayed below
    }
  };

  const inputStyle = hasError => ({
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    padding: 10,
    borderColor: hasError ? 'red' : '#B0BEC5',
    color: 'black',
  });

  const renderError = message => {
    if (!message) return null;
    return (
      <Text style={styles.errorLabel}>
        {message}
      </Text>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'white' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ padding: 30 }}>
          {/* NAME */}
          <View style={{ gap: 10, marginBottom: 10 }}>
            <Text>Name</Text>

            <Controller
              control={control}
              name="name"
              rules={{
                required: 'Name is required',
                validate: value =>
                  value.trim().length > 0 || 'Name cannot be empty',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter Name"
                  placeholderTextColor="#B0BEC5"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="words"
                  style={inputStyle(errors.name)}
                />
              )}
            />

            {renderError(errors.name?.message)}
          </View>

          {/* EMAIL */}
          <View style={{ gap: 10, marginBottom: 10 }}>
            <Text>Email</Text>

            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter Email"
                  placeholderTextColor="grey"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={inputStyle(errors.email)}
                />
              )}
            />

            {renderError(errors.email?.message)}
          </View>

          {/* PASSWORD */}
          <View style={{ gap: 10, marginBottom: 10 }}>
            <Text>Password</Text>

            <Controller
              control={control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
                onChange: () => {
                  if (getValues('confirmPassword')) {
                    trigger('confirmPassword');
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter Password"
                  placeholderTextColor="grey"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                  autoCapitalize="none"
                  style={inputStyle(errors.password)}
                />
              )}
            />

            {renderError(errors.password?.message)}
          </View>

          {/* CONFIRM PASSWORD */}
          <View style={{ gap: 10, marginBottom: 10 }}>
            <Text>Re-type Password</Text>

            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: 'Please confirm your password',
                validate: value =>
                  value === getValues('password') || 'Passwords do not match',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Re-type Password"
                  placeholderTextColor="grey"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                  autoCapitalize="none"
                  style={inputStyle(errors.confirmPassword)}
                />
              )}
            />

            {renderError(errors.confirmPassword?.message)}
          </View>

          {/* TERMS AND CONDITIONS */}
          <View
            style={{
              marginBottom: 30,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Text>I agree with the </Text>
            <Text style={{ color: '#42A5F5' }}>Terms & Conditions</Text>
          </View>

          {/* SIGNUP BUTTON */}
          <TouchableOpacity
            disabled={loading || isSubmitting}
            style={{
              width: '100%',
              backgroundColor: '#42A5F5',
              borderRadius: 20,
              opacity: loading || isSubmitting ? 0.6 : 1,
            }}
            onPress={handleSubmit(handleSignup)}
          >
            <Text
              style={{
                textAlign: 'center',
                padding: 16,
                color: 'white',
                fontWeight: '500',
              }}
            >
              {loading || isSubmitting ? 'Signing up...' : 'Sign Up'}
            </Text>
          </TouchableOpacity>

          {!!error && (
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                color: 'red',
                fontWeight: '500',
              }}
            >
              {typeof error === 'string'
                ? error
                : 'Registration failed. Please try again.'}
            </Text>
          )}
        </View>

        {/* SOCIAL LOGIN AND LOGIN LINK */}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  errorLabel: {
    color: 'red',
    marginTop: 4,
    marginBottom: 6,
  },
});
