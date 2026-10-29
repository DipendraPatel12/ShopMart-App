import React, { useEffect } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { colors, moderateScale } from '../../constants';
import styles from './Signup.styles';

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
    ...styles.textInputStyle,
    borderColor: hasError ? colors.error : colors.border,
  });

  const renderError = message => {
    if (!message) return null;
    return <Text style={styles.errorLabel}>{message}</Text>;
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
          {/* NAME */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Name</Text>

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
                  placeholderTextColor={colors.textMuted}
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
                onChange: () => {
                  if (getValues('confirmPassword')) {
                    trigger('confirmPassword');
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter Password"
                  placeholderTextColor={colors.textMuted}
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
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Re-type Password</Text>

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
                  placeholderTextColor={colors.textMuted}
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
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>I agree with the </Text>
            <Text style={styles.termsLink}>Terms & Conditions</Text>
          </View>

          {/* SIGNUP BUTTON */}
          <TouchableOpacity
            disabled={loading || isSubmitting}
            style={[
              styles.signupBtnContainer,
              (loading || isSubmitting) && styles.buttonDisabled,
            ]}
            onPress={handleSubmit(handleSignup)}
          >
            <Text style={styles.signupBtnText}>
              {loading || isSubmitting ? 'Signing up...' : 'Sign Up'}
            </Text>
          </TouchableOpacity>

          {!!error && (
            <Text style={styles.errorText}>
              {typeof error === 'string'
                ? error
                : 'Registration failed. Please try again.'}
            </Text>
          )}
        </View>

        {/* SOCIAL LOGIN AND LOGIN LINK */}
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

          <View style={styles.loginRow}>
            <Text style={styles.haveAccountText}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}> Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
