import { TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
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
      <FontAwesome5
        name="angle-left"
        size={moderateScale(20)}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default Back;
