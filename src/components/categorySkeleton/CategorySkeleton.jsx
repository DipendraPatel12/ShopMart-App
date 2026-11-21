import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Skeleton from '../skeleton/Skeleton';
import { scale, verticalScale, moderateScale } from '../../constants';
import styles from './CategorySkeleton.styles';

const PILL_WIDTHS = [scale(50), scale(95), scale(80), scale(105), scale(75)];

const CategorySkeleton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Category</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {PILL_WIDTHS.map((pillWidth, index) => (
          <View key={index} style={styles.itemWrapper}>
            <Skeleton
              width={pillWidth}
              height={verticalScale(28)}
              borderRadius={moderateScale(10)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default React.memo(CategorySkeleton);
