import { View, Dimensions } from 'react-native';
import React from 'react';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

import { AppImage } from '../lib';
import img1 from '../assets/images/sale.png';
import img2 from '../assets/images/splash1.png';
import img3 from '../assets/images/splash2.png';
import styles from './Slider.styles';

const { width } = Dimensions.get('window');

const Slider = () => {
  const data = [img1, img2, img3];
  const progress = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={width * 0.48}
        data={data}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        autoPlay
        renderItem={({ item }) => (
          <View style={styles.slideWrapper}>
            <AppImage
              source={item}
              style={styles.slideImage}
              resizeMode="cover"
            />
          </View>
        )}
      />

      <View style={styles.paginationContainer}>
        <Pagination.Custom
          progress={progress}
          data={data}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          containerStyle={styles.paginationGap}
        />
      </View>
    </View>
  );
};

export default Slider;
