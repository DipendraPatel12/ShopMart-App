import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import { colors } from '../constants';
import styles from './Loading.styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loading;
