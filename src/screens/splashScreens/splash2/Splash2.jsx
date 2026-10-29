import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
 import useSkipOnboarding from '../../../hooks/useSkipOnboarding';
 import { AppImage } from '../../../lib';
import styles from '../Splash.styles';

const Splash2 = ({ navigation }) => {
  const handleSkip = useSkipOnboarding(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          <AppImage
            source={require('../../../assets/images/deliveryBoy.png')}
            style={styles.splashImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.indicatorContainer}>
          <View style={styles.dot} />
          <View style={styles.activeDot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            We Ensure Fast Delivery Of Your Order
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.nextBtn}
          onPress={() => navigation.navigate('Splash3')}
        >
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
          <Text style={styles.skipBtnText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash2;
