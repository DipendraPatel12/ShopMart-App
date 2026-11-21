import React from 'react';
import { View } from 'react-native';
import Skeleton from '../skeleton/Skeleton';
import { scale, verticalScale, moderateScale } from '../../constants';
import styles from './ProductSkeleton.styles';

const ProductSkeleton = () => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productCard}>
        <View style={styles.favoriteButtonPosition}>
          <Skeleton
            width={scale(28)}
            height={scale(28)}
            borderRadius={moderateScale(8)}
          />
        </View>

        <View style={styles.productInnerCard}>
          <Skeleton
            width={scale(85)}
            height={verticalScale(85)}
            borderRadius={moderateScale(12)}
          />
        </View>

        <View style={styles.productTextContainer}>
          <Skeleton
            width="85%"
            height={verticalScale(14)}
            borderRadius={moderateScale(4)}
          />
          <Skeleton
            width="45%"
            height={verticalScale(10)}
            borderRadius={moderateScale(4)}
            style={styles.ratingSkeleton}
          />
        </View>

        <View style={styles.productPriceAndAddbtn}>
          <Skeleton
            width={scale(55)}
            height={verticalScale(18)}
            borderRadius={moderateScale(4)}
          />
          <Skeleton
            width={scale(28)}
            height={scale(28)}
            borderRadius={moderateScale(14)}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(ProductSkeleton);
