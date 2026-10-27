import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors, moderateScale } from '../constants';

const TabBarIcon = ({ name, focused, size = 20 }) => {
  return (
    <FontAwesome5
      name={name}
      size={moderateScale(size)}
      color={focused ? colors.primary : colors.textMuted}
    />
  );
};

export default React.memo(TabBarIcon);
