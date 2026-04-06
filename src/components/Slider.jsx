import { StyleSheet, View, Image, Dimensions } from 'react-native';
import React, { useRef } from 'react';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';

import img3 from '../assets/images/splash2.png';
import img1 from '../assets/images/sale.png';
import img2 from '../assets/images/splash1.png';

import { useSharedValue } from 'react-native-reanimated';
const width = Dimensions.get('window').width;
const Slider = () => {
  const data = [img1, img2, img3];
  const ref = useRef(null);
  const progress = useSharedValue(0);

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        autoPlay
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              position: 'relative',
            }}
          >
            <Image
              source={item}
              style={{
                width: '90%',
                height: '90%',
                resizeMode: 'cover',
                borderRadius: 20,
              }}
            />
          </View>
        )}
      />

      <View style={{ position: 'absolute', top: 150, left: 180 }}>
        <Pagination.Custom
          progress={progress}
          data={data}
          dotStyle={{
            backgroundColor: 'white',
            borderRadius: 50,
          }}
          activeDotStyle={{
            backgroundColor: '#2196F3',
          }}
          containerStyle={{ gap: 5 }}
        />
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
