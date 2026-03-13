import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import img1 from '../assets/images/splash2.png';
import img2 from '../assets/images/splash1.png';
import img3 from '../assets/images/sale.png';
const Slider = () => {
  const hero = [img1, img2, img3];
  return (
    <View style={styles.sliderContainer}>
      <FlatList
        data={hero}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.sliderCard}>
            <Image
              source={item}
              style={styles.sliderImageStyle}
              resizeMode="cover"
            ></Image>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    width: 393,
    height: 200,
    padding: 20,
    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sliderCard: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 350,
    height: 160,
    marginRight: 3,
  },
  sliderImageStyle: { width: 350, height: 160, borderRadius: 20 },
});
