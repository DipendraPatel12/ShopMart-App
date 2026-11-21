import React from 'react';
import { View } from 'react-native';
import styles from './Skeleton.styles';

const Skeleton = ({ width, height, borderRadius = 4, style }) => {
  return (
    <View
      style={[
        styles.skeleton,
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

export default Skeleton;
