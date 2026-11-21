import React from 'react';
import { View, Dimensions } from 'react-native';
import Skeleton from '../skeleton/Skeleton';
import { scale, moderateScale } from '../../constants';
import styles from './SliderSkeleton.styles';

const { width } = Dimensions.get('window');

const SliderSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton
        width="92%"
        height={width * 0.48 * 0.92}
        borderRadius={moderateScale(20)}
      />

      <View style={styles.paginationContainer}>
        <Skeleton
          width={scale(16)}
          height={scale(8)}
          borderRadius={moderateScale(50)}
        />
        <Skeleton
          width={scale(8)}
          height={scale(8)}
          borderRadius={moderateScale(50)}
        />
        <Skeleton
          width={scale(8)}
          height={scale(8)}
          borderRadius={moderateScale(50)}
        />
      </View>
    </View>
  );
};

export default React.memo(SliderSkeleton);
