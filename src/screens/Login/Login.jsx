import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Login = ({ navigation }) => {
  const { login, loading, error, token, clearAuthStatus } = useAuth();

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (token) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    }
  }, [token, navigation]);

  const handleLogin = async formData => {
    try {
      clearAuthStatus();
      await login({
        email: formData.email.trim(),
        password: formData.password,
      });
    } catch (err) {
      // Error is stored in auth state and displayed below
    }
  };

  const inputStyle = hasError => ({
    ...styles.textInputStyle,
    borderColor: hasError ? 'red' : '#B0BEC5',
  });

  const renderError = message => {
    if (!message) return null;
    return <Text style={styles.validationError}>{message}</Text>;
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
          {/* EMAIL */}
          <View style={styles.fieldContainer}>
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
                  onChangeText={text => {
                    onChange(text);
                    clearErrors('server');
                  }}
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
          <View style={styles.fieldContainer}>
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
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter Password"
                  placeholderTextColor="grey"
                  value={value}
                  onChangeText={text => {
                    onChange(text);
                    clearErrors('server');
                  }}
                  onBlur={onBlur}
                  secureTextEntry
                  autoCapitalize="none"
                  style={inputStyle(errors.password)}
                />
              )}
            />

            {renderError(errors.password?.message)}
          </View>

          <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => {}}>
            <Text style={styles.forgetBtnText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={loading || isSubmitting}
            style={[
              styles.loginBtnContainer,
              {
                opacity: loading || isSubmitting ? 0.6 : 1,
              },
            ]}
            onPress={handleSubmit(handleLogin)}
          >
            <Text style={styles.loginBtnText}>
              {loading || isSubmitting ? 'Logging in...' : 'Login'}
            </Text>
          </TouchableOpacity>

          {!!error && (
            <Text style={styles.errorText}>
              {typeof error === 'string'
                ? error
                : 'Login failed. Please check your details and try again.'}
            </Text>
          )}

          {renderError(errors.server?.message)}
        </View>

        <View style={styles.bottomNavIconContainer}>
          <Text>Or Login With</Text>

          <View style={styles.iconContainer}>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  fieldContainer: {
    justifyContent: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    padding: 10,
    borderColor: '#B0BEC5',
    color: 'black',
  },
  forgetBtnText: {
    color: '#42A5F5',
    textAlign: 'right',
    marginRight: 5,
  },
  loginBtnContainer: {
    width: '100%',
    backgroundColor: '#42A5F5',
    borderRadius: 20,
  },
  loginBtnText: {
    textAlign: 'center',
    padding: 16,
    color: 'white',
    fontWeight: '500',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
    fontWeight: '500',
  },
  validationError: {
    color: 'red',
    marginTop: 4,
  },
  bottomNavIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});
