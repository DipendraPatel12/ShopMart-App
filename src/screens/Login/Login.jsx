import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { colors, moderateScale } from '../../constants';
import styles from './Login.styles';

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
    } catch {
      // Error is handled in auth state
    }
  };

  const inputStyle = hasError => ({
    ...styles.textInputStyle,
    borderColor: hasError ? colors.error : colors.border,
  });

  const renderError = message => {
    if (!message) return null;
    return <Text style={styles.validationError}>{message}</Text>;
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          {/* EMAIL */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email</Text>

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
                  placeholderTextColor={colors.textMuted}
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
            <Text style={styles.label}>Password</Text>

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
                  placeholderTextColor={colors.textMuted}
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

          <TouchableOpacity style={styles.forgetBtn} onPress={() => {}}>
            <Text style={styles.forgetBtnText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={loading || isSubmitting}
            style={[
              styles.loginBtnContainer,
              (loading || isSubmitting) && styles.buttonDisabled,
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
          <Text style={styles.socialText}>Or Login With</Text>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <FontAwesome5 name="facebook" size={moderateScale(32)} color="#1877F2" />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesome5 name="google" size={moderateScale(28)} color={colors.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.signupRow}>
            <Text style={styles.noAccountText}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signupLink}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
