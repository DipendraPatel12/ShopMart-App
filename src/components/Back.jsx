import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppIcon } from '../lib';
import { colors, moderateScale } from '../constants';
import styles from './Back.styles';

const Back = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
      activeOpacity={0.7}
    >
      <AppIcon
        name="angle-left"
        size={moderateScale(20)}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default Back;
