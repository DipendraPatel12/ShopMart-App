import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { AppImage } from '../../../lib';
import { ROUTES } from '../../../constants';
import styles from '../Splash.styles';

const Splash3 = ({ navigation }) => {
  const { completeOnboarding } = useAuth();

  const handleGetStarted = async () => {
    try {
      await completeOnboarding();
      navigation.navigate(ROUTES.LOGIN);
    } catch {
    }
  };

  const handleNext = async () => {
    try {
      await completeOnboarding();
      navigation.navigate(ROUTES.SIGNUP);
    } catch {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          <AppImage
            source={require('../../../assets/images/splash3.png')}
            style={styles.splashImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.indicatorContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.activeDot} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            We Provide High Quality Product Just For You
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.nextBtn}
          onPress={handleNext}
        >
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipBtn} onPress={handleGetStarted}>
          <Text style={styles.skipBtnText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash3;
